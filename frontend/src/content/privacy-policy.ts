import { legalContent } from "@/content/brand";

const privacyPolicyRaw = legalContent.privacyPolicyRaw;

type PrivacyPolicySection = {
  heading: string;
  body: string;
};

const [privacyPolicyTitle, ...privacyPolicyRestLines] = privacyPolicyRaw.split("\n");
const privacyPolicyRest = privacyPolicyRestLines.join("\n");
const [privacyPolicyMeta, ...privacyPolicySectionBlocks] = privacyPolicyRest.split(/\n(?=\d+\.\s)/);

function parsePrivacySection(sectionBlock: string): PrivacyPolicySection {
  const lines = sectionBlock.split("\n");
  const headingLines = [lines[0]?.trim() ?? ""];
  let bodyStartIndex = 1;

  while (bodyStartIndex < lines.length) {
    const candidateLine = lines[bodyStartIndex]?.trim() ?? "";

    if (!candidateLine) {
      bodyStartIndex += 1;
      continue;
    }

    const isContinuationHeading =
      candidateLine === candidateLine.toUpperCase() &&
      /^[0-9A-ZА-ЯЁ«»"().,\s-]+$/u.test(candidateLine);

    if (!isContinuationHeading) {
      break;
    }

    headingLines.push(candidateLine);
    bodyStartIndex += 1;
  }

  return {
    heading: headingLines.join("\n").trim(),
    body: lines.slice(bodyStartIndex).join("\n").trim(),
  };
}

export const privacyPolicy = {
  title: privacyPolicyTitle.trim(),
  meta: privacyPolicyMeta.trim(),
  sections: privacyPolicySectionBlocks.map(parsePrivacySection),
} as const;
