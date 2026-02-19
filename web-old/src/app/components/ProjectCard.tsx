import React from "react";
import { Project } from "../types/schema";
import PreJson from "./ui/PreJson";
import Image from "next/image";
import { _linkResolver } from "../utils/utils";
import Link from "next/link";
import Figure from "./ui/Figure";

type Props = {
  input: Project;
};

const ProjectCard = ({ input }: Props) => {
  const { coverImage, title, year } = input;
  return (
    <article className='relative shrink-0'>
      {/* <PreJson input={input} /> */}
      <Link href={_linkResolver(input)}>
        {coverImage && <Figure image={coverImage} title={title} />}
        <div className='footer absolute bottom-0 left-0 p-md'>
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
