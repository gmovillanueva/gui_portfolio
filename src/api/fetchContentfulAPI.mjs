// import { createClient } from 'contentful';
//import path from 'path';

//const contentful = require('contentful');
//const fs = require('fs');
//const path = require('path');

import contentful from "contentful";
import fs from "fs-extra";
import path from 'path';
import dotenv from 'dotenv';
import {sanitizeJSON} from "../utils/sanitizeJSON.mjs";
import {customLog} from "../utils/customLogger/logger.mjs";

dotenv.config({ path: `.env.local`, override: true })

const cacheFilePath = path.join(
  process.cwd(),
  'src/api/cache/experienceSanitized.json',
);

const writeCache = async (fetcheData) => {
  new Promise((resolve) => {
    fs.outputFile(cacheFilePath,JSON.stringify(fetcheData,null, 2) , (error) => {
      if (error) console.error('writeCache: ', error);
      resolve(true);
    });
  })
}

export const readCache = async() =>{
  try{
    return fs.readJson(cacheFilePath);
  } catch(error){
    console.error(error);
  }

}

export const fetchContentfulAPI = async (contentType) => {

  const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await contentfulClient
    .getEntries({
      content_type: contentType,
    })
    .then((data) => {
      return data?.items;
    });

  const sanitizedData = sanitizeJSON(entries);

  try {
    await writeCache(sanitizedData)
    customLog('_CYAN','Wrote ' + contentType + ' cache successfully.')
  } catch (error) {
    customLog('_RED','Error: ' + contentType)
  }
};
