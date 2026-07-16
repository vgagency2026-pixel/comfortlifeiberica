import { Hero } from "@/components/sections/Hero";
import { IdentityStatement } from "@/components/sections/IdentityStatement";
import { CollectionPreview } from "@/components/sections/CollectionPreview";
import { SelectionProcess } from "@/components/sections/SelectionProcess";
import { TerritoryPreview } from "@/components/sections/TerritoryPreview";
import { ExperiencesFeatured } from "@/components/sections/ExperiencesFeatured";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getLocale, getDictionary } from "@/lib/i18n";

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <IdentityStatement dict={dict} />
      <CollectionPreview dict={dict} />
      <SelectionProcess dict={dict} />
      <TerritoryPreview dict={dict} />
      <ExperiencesFeatured dict={dict} />
      <ContactCTA dict={dict} />
    </>
  );
}
