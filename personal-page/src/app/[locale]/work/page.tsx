import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getDictionary } from "@/resources/dictionaries";
import { getContent } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const dict = getDictionary(resolvedParams.locale);
  const { work } = getContent(dict, resolvedParams.locale);

  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: `/${resolvedParams.locale}${work.path}`,
  });
}

export default async function Work({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const dict = getDictionary(resolvedParams.locale);
  const { work, person, about } = getContent(dict, resolvedParams.locale);
  
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects locale={resolvedParams.locale} />
    </Column>
  );
}
