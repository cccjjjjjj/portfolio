export type JourneyStep = { kicker: string; title: string; body: string };
export type ProjectFact = { label: "Scope" | "Finding" | "Status"; value: string };

export type ProjectJourney = {
  image: string;
  imageAlt: string;
  lede: string;
  indexTitle: string;
  results: ProjectFact[];
  indexTags: string[];
  steps: JourneyStep[];
};

export const projectJourneys: Record<string, ProjectJourney> = {
  grace: {
    image: "/images/projects/illustrations/grace-sketch-v2.jpg",
    imageAlt: "Graphite sketch of a phone, receipt ribbon, purchase card, calendar, and parcel",
    lede: "A source-transparent iOS concept that keeps one purchase ready for its next return, refund, or warranty action.",
    indexTitle: "Grace",
    results: [
      { label: "Scope", value: "109 contract tests" },
      { label: "Finding", value: "Source-transparent states" },
      { label: "Status", value: "In progress" },
    ],
    indexTags: ["2026", "Product"],
    steps: [
      { kicker: "The problem", title: "A purchase is easy to lose track of.", body: "Grace brings scattered receipts, return windows, warranty details, and refund updates into one selected-item record." },
      { kicker: "The boundary", title: "Capture only what the user shares.", body: "Extracted details remain editable, retain their source, and never turn an unknown value into a confident claim." },
      { kicker: "The system", title: "Move through truthful states.", body: "Constrained return steps keep estimates, confirmed events, warranties, and statutory protections meaningfully separate." },
      { kicker: "The checkpoint", title: "Test the contract before the interface.", body: "The current Windows checkpoint passes 109 contract-compatible GraceKit tests, with Xcode and device verification still required." },
    ],
  },
  "vast-challenge-2026": {
    image: "/images/projects/illustrations/vast-sketch-v2.jpg",
    imageAlt: "Graphite sketch of communication nodes around an embargo clock with one path escaping early",
    lede: "A visual investigation of how timing, network structure, and channel coverage enabled an early public release.",
    indexTitle: "Embargo Breach",
    results: [
      { label: "Scope", value: "5 analytical views" },
      { label: "Finding", value: "Control coverage gap" },
      { label: "Status", value: "Independent project" },
    ],
    indexTags: ["2026", "Visual analytics"],
    steps: [
      { kicker: "The incident", title: "The release appeared one hour too early.", body: "Agent-linked social accounts published merger details before the communication embargo ended." },
      { kicker: "The reconstruction", title: "Follow timing, channels, and relationships.", body: "Message and round tables connected escalation timing, network structure, baseline behaviour, and within-agent anomalies." },
      { kicker: "The correction", title: "First assumptions did not survive the evidence.", body: "The evidence supported neither blaming the interns nor attributing the stock decline solely to the early release." },
      { kicker: "The finding", title: "The breach exposed a coverage gap.", body: "Incomplete compliance coverage across communication channels enabled the incident beyond any single model failure." },
    ],
  },
  "motor-insurance": {
    image: "/images/projects/illustrations/motor-sketch-v2.jpg",
    imageAlt: "Graphite sketch of a fractured tyre and steering wheel examined with a magnifying glass",
    lede: "Ten familiar insurance assumptions tested against profitability, frequency, severity, and retention evidence.",
    indexTitle: "Motor Risk Myths",
    results: [
      { label: "Scope", value: "10 myths tested" },
      { label: "Finding", value: "Risk concentrated in segments" },
      { label: "Status", value: "Reproducible report" },
    ],
    indexTags: ["2026", "Insurance analytics"],
    steps: [
      { kicker: "The question", title: "Which risks are real, and which are familiar stories?", body: "Ten motor-insurance assumptions were tested against a Spanish portfolio observed from 2022 to 2024." },
      { kicker: "The triage", title: "Begin with materiality, not an interesting chart.", body: "Frequency, severity, loss ratio, premium share, and uncertainty located the segments that could affect decisions." },
      { kicker: "The challenge", title: "An average can hide the risky tail.", body: "Distribution and interaction views separated broad stereotypes from concentrated portfolio risk." },
      { kicker: "The outcome", title: "Replace myths with decision evidence.", body: "The reproducible report supports careful retention, monitoring, and pricing conversations without claiming production readiness." },
    ],
  },
  "poverty-forecasting": {
    image: "/images/projects/illustrations/poverty-sketch-v2.jpg",
    imageAlt: "Graphite sketch of the Philippine archipelago with four regional observation frames",
    lede: "Satellite and socioeconomic time series used to forecast poverty indicators across Philippine regions.",
    indexTitle: "Poverty Forecasting",
    results: [
      { label: "Scope", value: "4 satellite indicators" },
      { label: "Finding", value: "Regional forecasts" },
      { label: "Status", value: "Published by Springer" },
    ],
    indexTags: ["2026", "Published research"],
    steps: [
      { kicker: "The gap", title: "Survey evidence arrives slowly.", body: "The study tested whether public satellite indicators could strengthen regional poverty forecasting." },
      { kicker: "The signals", title: "Read activity and environment together.", body: "Nighttime radiance represented human activity while NDVI and EVI contributed environmental context." },
      { kicker: "The model", title: "Join geographic and temporal evidence.", body: "A recurrent neural network combined satellite and socioeconomic time series across Philippine regions." },
      { kicker: "The publication", title: "Carry the limitations with the result.", body: "The collaborative study was presented in 2023 and published by Springer in 2026." },
    ],
  },
  "enso-forecasting": {
    image: "/images/projects/illustrations/enso-sketch-v2.jpg",
    imageAlt: "Graphite sketch of opposing ocean currents above dry fractured ground and a faint forecast trace",
    lede: "Seven decades of climate observations translated into an interpretable Oceanic Niño Index forecast.",
    indexTitle: "ENSO Forecasting",
    results: [
      { label: "Scope", value: "72 years, 3 models" },
      { label: "Finding", value: "Lowest MAE 0.014" },
      { label: "Status", value: "Preliminary evidence" },
    ],
    indexTags: ["2023", "Climate forecasting"],
    steps: [
      { kicker: "The climate", title: "A distant current changes local decisions.", body: "ENSO influences rainfall, agriculture, water resources, disaster planning, and public health." },
      { kicker: "The record", title: "Prepare seven decades as one time series.", body: "Monthly observations from 1951 to 2022 were corrected, imputed, normalised, and reshaped for forecasting." },
      { kicker: "The method", title: "Use an interpretable model deliberately.", body: "Prophet modelled monthly ONI patterns and was compared with linear regression and an LSTM." },
      { kicker: "The result", title: "Lead on absolute error, not every metric.", body: "Prophet recorded the study's lowest reported MAE, while validation limitations remain documented as preliminary evidence." },
    ],
  },
};

export function getProjectJourney(slug: string) { return projectJourneys[slug]; }
