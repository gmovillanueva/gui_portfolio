import {fetchContentfulAPI} from "../../api/fetchContentfulAPI.mjs";

export const preBuildDevelopment = async () => {
  await fetchContentfulAPI('experience');
};

export const preBuildProduction = async () => {
  await fetchContentfulAPI('experience');
};
