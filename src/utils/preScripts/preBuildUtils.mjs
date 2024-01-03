import {fetchContentfulAPI} from "../../api/fetchContentfulAPI.mjs";

export const preBuildDevelopment = async () => {
  await fetchContentfulAPI('experience');
  await fetchContentfulAPI('projects');
};

export const preBuildProduction = async () => {
  await fetchContentfulAPI('experience');
  await fetchContentfulAPI('projects');
};
