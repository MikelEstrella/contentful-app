import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "apk0vgej6wo6",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      console.log(response);
      const projects = response.items.map((item) => {
        const { title, image, url } = item.fields;
        const img = image?.fields?.file?.url;
        const id = item.sys.id;
        // const id = item.sys.id;
        // const title = item.fields.title;
        // const url = item.fields.url;
        // const image = item?.fields?.image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setLoading(false);
      setProjects(projects);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

// client
//   .getEntries({ content_type: "projects" })
//   .then((response) => console.log(response));
