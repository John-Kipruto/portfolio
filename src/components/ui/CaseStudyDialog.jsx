"use client";

import Modal from "./Modal";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudyDialog({ projectId, onClose }) {
  const project = caseStudies[projectId];
  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      titleId="case-title"
      label="PROJECT NOTES"
    >
      {project && (
        <>
          <p className="font-mono text-xs text-[#5c713b]">{project.label}</p>
          <h2
            id="case-title"
            className="my-[0.83em] text-4xl tracking-[-1.5px] max-[650px]:text-[29px]"
          >
            {project.title}
          </h2>
          <p className="text-muted">{project.intro}</p>
          {project.sections.map(([heading, description]) => (
            <section key={heading}>
              <h3 className="mt-7 mb-[1em] text-xl tracking-[-0.5px]">
                {heading}
              </h3>
              <p className="text-muted">{description}</p>
            </section>
          ))}
        </>
      )}
    </Modal>
  );
}
