import path from "path";
import fs from "fs-extra";

export const readCache = async(contentType) =>{
  const cacheFilePath = path.join(
    process.cwd(),
    'src/api/cache/'+contentType+'Sanitized.json',
  );
  try{
    return fs.readJson(cacheFilePath);
  } catch(error){
    console.error(error);
  }
};
