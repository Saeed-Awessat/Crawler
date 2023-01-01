import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";
import * as urlParser from "url";

interface ICrawl {
  url: string;
  ignore: string;
}

const seenUrls = {} as any;
const links: any[] = [];
const images: any[] = [];
const screenshot: any[] = [];

const getUrl = (link: string, host: string, protocol: string) => {
  if (link.includes("http")) {
    return link;
  } else if (link.startsWith("/")) {
    return `${protocol}//${host}${link}`;
  } else {
    return `${protocol}//${host}/${link}`;
  }
};

const getHtmlElement = (element: string): any[] => {
  return [];
};

const crawl = async ({ url, ignore }: ICrawl) => {
  if (seenUrls[url]) return;

  seenUrls[url] = true;
  const { host, protocol } = new urlParser.URL(url) as any;
  const { data } = await axios.get(url);
  const html = await data.text();
  const $ = cheerio.load(html);

  $("a").each((_, row) => {
    links.push(row.attribs?.href as any);
  });

  const imageUrls = $("img")
    .map((i, link) => link.attribs.src)
    .get();

  imageUrls.forEach((imageUrl: string) => {
    axios({ url: getUrl(imageUrl, host, protocol) }).then((response: any) => {
      const filename = path.basename(imageUrl);
      const dest = fs.createWriteStream(`images/${filename}`);
      response.body.pipe(dest);
    });
  });

  links
    .filter((link) => link.includes(host) && !link.includes(ignore))
    .forEach((link) => {
      crawl({
        url: getUrl(link, host, protocol),
        ignore,
      });
    });
  console.log({ links });
};

crawl({
  url: "http://stevescooking.blogspot.com/",
  ignore: "/search",
});

export const CrawlApi = {
  links: getHtmlElement("a"),
  images: getHtmlElement("img"),
  // screenshot: getHtmlElement('screenshot'),
};
