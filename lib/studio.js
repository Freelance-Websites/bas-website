import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';

export async function getStudioData() {
  const studioDirectory = path.join(process.cwd(), 'content/studio.md');
  const fileContents = fs.readFileSync(studioDirectory, 'utf8');

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data
  return {
    ...matterResult.data,
    contentHtml
  }
}