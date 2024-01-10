'use server';

import contentful from "contentful";
import fs from "fs-extra";
import path from 'path';
import dotenv from 'dotenv';
import {sanitizeJSON} from "./sanitizeJSON.mjs";
import {customLog} from "../customLogger/logger.mjs";

dotenv.config({ path: `.env.local`, override: true })

const writeCache = async (contentType, fetcheData) => {
  const cacheFilePath = path.join(
    process.cwd(),
    './src/api/cache/contentful/'+contentType+'Sanitized.json',
  );

  new Promise((resolve) => {
    fs.outputFile(
      cacheFilePath,
      JSON.stringify(fetcheData,null, 2),
      (error) => {
      if (error) console.error('writeCache: ', error);
      resolve(true);
      }
    );
  })
}

export const fetchContentfulAPI = async (contentType) => {
  const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await contentfulClient
    .getEntries({content_type: contentType })
    .then((data) => {
      return data?.items;
    });

  const sanitizedData = sanitizeJSON(entries);

  try {
    await writeCache(contentType, sanitizedData)
    customLog('_CYAN','Wrote ' + contentType + ' cache successfully.')
  } catch (error) {
    customLog('_RED','Error: ' + contentType)
  }
};
