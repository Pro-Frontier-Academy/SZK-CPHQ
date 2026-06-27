// ============================================================
// MODULE 2 — Patient Safety
// Practice Quiz — Question Bank (62 Questions)
// ============================================================

const MODULE_2_QUIZ_CATEGORIES = [
  "Safety Culture",
  "Leadership & Governance",
  "Risk Assessment Tools",
  "Reporting & Detection",
  "Human Factors & Technology",
  "Improvement Methodology",
  "Data & Measurement"
];

const MODULE_2_QUIZ_QUESTIONS = [

  {
    category: "Safety Culture",
    question: "The culture of safety survey data below is collected from perioperative services. Which action should the healthcare quality professional recommend?",
    options: [
      "Implement a leadership training series on Just Culture principles.",
      "Establish a process for executive walk-arounds in the perioperative departments.",
      "Develop a team-based communication training for perioperative staff.",
      "Educate perioperative staff on how to submit incident reports."
    ],
    correct: 1,
    explanation: "Executive walk-arounds directly address visible leadership commitment to safety, which was the weakest culture area. Concept tested: leadership visibility and safety culture."
  },

  {
    category: "Safety Culture",
    question: "An organization conducts daily briefing sessions. Which of the following questions demonstrates a culture of safety?",
    options: [
      "\"Do we have available beds in the ICU?\"",
      "\"Did anything happen last night that could lead to a central line infection?\"",
      "\"Who is the last person that committed a medication error?\"",
      "\"What was the patient's intake and output?\""
    ],
    correct: 1,
    explanation: "A safety briefing should identify risks and weak signals before harm occurs. Option C is blame-focused. Concept tested: proactive safety culture."
  },

  {
    category: "Safety Culture",
    question: "A healthcare organization wants to evaluate staff perceptions about error reporting, teamwork, and management support. What is the most appropriate first step?",
    options: [
      "Implement a disciplinary policy.",
      "Conduct a patient safety culture survey.",
      "Introduce new clinical protocols.",
      "Increase staffing levels."
    ],
    correct: 1,
    explanation: "Perceptions about reporting, teamwork and management support are best assessed through a patient safety culture survey. Concept tested: safety culture assessment."
  },

  {
    category: "Safety Culture",
    question: "Which tool is commonly used internationally to measure patient safety culture in hospitals?",
    options: [
      "Balanced Scorecard.",
      "AHRQ Hospital Survey on Patient Safety Culture.",
      "Six Sigma Control Chart.",
      "Utilization Review Tool."
    ],
    correct: 1,
    explanation: "The AHRQ Hospital Survey on Patient Safety Culture is a recognized tool for measuring staff perceptions of patient safety culture. Concept tested: AHRQ SOPS/HSOPS."
  },

  {
    category: "Safety Culture",
    question: "In a strong safety culture, leaders primarily view errors as:",
    options: [
      "Individual negligence.",
      "Legal violations.",
      "Opportunities to improve systems.",
      "Evidence of staff incompetence."
    ],
    correct: 2,
    explanation: "A safety culture treats errors as signals of system weakness and learning opportunities, not as automatic personal blame. Concept tested: systems thinking."
  },

  {
    category: "Leadership & Governance",
    question: "A leader regularly reviews incident reports, provides feedback to frontline staff, and supports system improvements. This practice mainly reflects:",
    options: [
      "Compliance management.",
      "Safety leadership commitment.",
      "Financial oversight.",
      "Administrative supervision."
    ],
    correct: 1,
    explanation: "Reviewing reports, giving feedback and supporting improvement shows active leadership commitment to safety. Concept tested: leadership role in safety culture."
  },

  {
    category: "Safety Culture",
    question: "When assessing patient safety culture, which of the following domains is typically measured?",
    options: [
      "Staff willingness to report errors.",
      "Revenue cycle performance.",
      "Marketing effectiveness.",
      "Patient billing satisfaction."
    ],
    correct: 0,
    explanation: "Willingness to report errors is a core safety culture domain. The other options are business or satisfaction areas, not safety culture domains. Concept tested: reporting culture."
  },

  {
    category: "Leadership & Governance",
    question: "Why is leadership commitment considered essential in sustaining a culture of safety?",
    options: [
      "Leaders manage all clinical procedures.",
      "Leaders allocate resources and set organizational priorities.",
      "Leaders conduct all safety investigations.",
      "Leaders perform direct patient care."
    ],
    correct: 1,
    explanation: "Leaders sustain safety by setting priorities, allocating resources and modeling safety values. Concept tested: governance and leadership accountability."
  },

  {
    category: "Reporting & Detection",
    question: "Which of the following is the best method to achieve a reduction in medical errors?",
    options: [
      "Establish disciplinary measures for clinical practitioners who commit errors.",
      "Encourage patients, families, and staff to report actual and potential errors.",
      "Counsel employees to be more careful when providing care.",
      "Change the process for reporting medical errors within the organization."
    ],
    correct: 1,
    explanation: "Broad reporting of actual and potential errors helps identify risks, near misses and system gaps before harm recurs. Concept tested: reporting and learning systems."
  },

  {
    category: "Improvement Methodology",
    question: "Which of the following is most important to include in a project to reduce post-operative infections?",
    options: [
      "Evidence-based literature.",
      "A multidisciplinary team.",
      "Staff education.",
      "Data collection tools."
    ],
    correct: 1,
    explanation: "Reducing post-operative infections requires coordination across surgery, nursing, anesthesia, infection prevention and other involved areas. Concept tested: multidisciplinary safety improvement."
  },

  {
    category: "Leadership & Governance",
    question: "A quality professional is reviewing identified deficiencies from a regulatory survey. Which deficiency should be prioritized for review?",
    options: [
      "A nurse was unable to recall a process related to a high-risk medication.",
      "A per diem provider was found to have an expired certification.",
      "A patient on suicide precautions was left alone in an emergency department room.",
      "Improper hand hygiene practices were noted among several dietary staff members."
    ],
    correct: 2,
    explanation: "A patient on suicide precautions left alone creates immediate risk of serious harm or death, so it is the highest priority. Concept tested: prioritization by severity and immediate patient risk."
  },

  {
    category: "Reporting & Detection",
    question: "Which type of surveillance refers to relying on another person to report a safety concern?",
    options: [
      "Retrospective.",
      "Passive.",
      "Prospective.",
      "Active."
    ],
    correct: 1,
    explanation: "Passive surveillance depends on people reporting events or concerns. Active surveillance involves actively looking for events. Concept tested: surveillance methods."
  },

  {
    category: "Safety Culture",
    question: "A manager can build psychological safety among their team by:",
    options: [
      "Making a change to the employees' schedule without the input of the unit scheduler.",
      "Conducting a collaborative debrief with the team after a medication error is detected.",
      "Allowing employees to discuss items on the agenda that is created by the management team.",
      "Posting the unit goals in the breakroom after they are developed by the management team."
    ],
    correct: 1,
    explanation: "Collaborative debriefing encourages speaking up, shared learning and trust after an error. Concept tested: psychological safety and learning culture."
  },

  {
    category: "Data & Measurement",
    question: "A patient safety culture survey shows several composite scores below the national average. Which intervention should the healthcare quality professional initiate next?",
    options: [
      "Create an employee reward system for safety reporting.",
      "Explore relationships among categories.",
      "Form a steering committee to establish scope and prioritization.",
      "Create a Pareto chart to identify highest areas of risk."
    ],
    correct: 1,
    explanation: "After survey results are available, the next step is deeper analysis of patterns and relationships among low-scoring categories before choosing interventions. Concept tested: data-driven safety culture improvement."
  },

  {
    category: "Improvement Methodology",
    question: "A CEO and chief nursing officer requested a new quality initiative to reduce patient falls. One of the first steps should include:",
    options: [
      "Training staff on the proper falls screening protocol.",
      "Evaluating baseline data to determine the cause of falls.",
      "Researching evidence-based guidelines.",
      "Implementing post-fall huddles on all units."
    ],
    correct: 1,
    explanation: "Before selecting interventions, the team should understand baseline performance and likely causes. Concept tested: starting improvement with data and problem understanding."
  },

  {
    category: "Safety Culture",
    question: "A healthcare quality professional has been asked to assess a facility's patient safety culture. Which of the following should be surveyed?",
    options: [
      "A stratified sample of physicians and nurses.",
      "All patients and their families.",
      "All staff and physicians.",
      "A random sample of leaders and staff."
    ],
    correct: 2,
    explanation: "Patient safety culture reflects the perceptions of everyone working in the organization, including staff and physicians. Concept tested: safety culture survey population."
  },

  {
    category: "Data & Measurement",
    question: "The national benchmark for CAUTI is 1.00. The organization's current rate is 1.50. When beginning a process improvement project to reduce CAUTI, what rate should be set as the initial goal?",
    options: [
      "1.25.",
      "1.00.",
      "0.50.",
      "0.00."
    ],
    correct: 0,
    explanation: "An initial goal should be realistic and incremental. Moving from 1.50 to 1.25 is a reasonable early target before reaching the benchmark. Concept tested: realistic improvement goal setting."
  },

  {
    category: "Risk Assessment Tools",
    question: "After a sentinel event, a root cause analysis (RCA) is performed. Which of the following should be included in the RCA?",
    options: [
      "Implementing process redesign.",
      "Reporting the event to the accrediting body.",
      "Retraining of individuals involved."
    ],
    correct: 0,
    explanation: "RCA should lead to systems-focused corrective action such as process redesign. External reporting may be required, but it is not the core RCA content. Retraining alone is usually a weak action. Concept tested: RCA and systems improvement."
  },

  {
    category: "Risk Assessment Tools",
    question: "A team is conducting an FMEA to determine whether a hospital laboratory should continue performing therapeutic phlebotomy on an outpatient basis. Which task must occur prior to brainstorming failure modes?",
    options: [
      "Develop a process flow diagram of the current procedure.",
      "Create a run chart of procedures performed per quarter.",
      "Conduct a root cause analysis.",
      "Review all prior adverse events related to the procedure."
    ],
    correct: 0,
    explanation: "FMEA starts by mapping the process. Failure modes are then identified for each step. Concept tested: FMEA sequence."
  },

  {
    category: "Risk Assessment Tools",
    question: "Which quality improvement tool is best for risk assessment of a new or modified process?",
    options: [
      "SWOT analysis.",
      "Failure mode and effects analysis (FMEA).",
      "Force field analysis.",
      "5 Whys."
    ],
    correct: 1,
    explanation: "FMEA is proactive and is used to identify where a new or changed process may fail before harm occurs. Concept tested: proactive risk assessment."
  },

  {
    category: "Improvement Methodology",
    question: "An organization has just experienced a wrong-site surgery. A quality leader was asked to conduct a review to understand how the process failed. Which tool is best for developing a shared understanding of the current process?",
    options: [
      "Ishikawa diagram.",
      "Stratification chart.",
      "Matrix diagram.",
      "Flowchart."
    ],
    correct: 3,
    explanation: "A flowchart shows the actual sequence of process steps and helps the team understand where the process broke down. Concept tested: process mapping after a safety event."
  },

  {
    category: "Data & Measurement",
    question: "Each department self-monitors and reports hand hygiene data each quarter. Results usually fall within 58–72%, except Respiratory Therapy, which consistently reports 100% compliance. What should the healthcare quality professional do next?",
    options: [
      "Require departments not achieving at least 95% compliance to develop corrective action plans.",
      "Validate that the Respiratory Therapy results are accurate.",
      "Recognize the Respiratory Therapy department for its outstanding compliance.",
      "Provide remedial hand hygiene training for the lowest scoring departments."
    ],
    correct: 1,
    explanation: "An unusually perfect self-reported result should be validated before recognition or action. Concept tested: data validity in safety measurement."
  },

  {
    category: "Reporting & Detection",
    question: "Which method is most effective to identify adverse events that cause harm to patients?",
    options: [
      "Benchmarking.",
      "Conducting a failure mode and effects analysis.",
      "Using patient satisfaction surveys.",
      "Employing trigger tools."
    ],
    correct: 3,
    explanation: "Trigger tools use chart clues such as naloxone use, abnormal labs or return to surgery to detect possible harm. Concept tested: adverse event detection."
  },

  {
    category: "Human Factors & Technology",
    question: "Even when appropriate processes are in place, errors can occur. Understanding this, leaders coordinating a patient safety program should focus on:",
    options: [
      "Staff complaints.",
      "Human factors.",
      "Time constraints.",
      "Patient satisfaction."
    ],
    correct: 1,
    explanation: "Human factors focuses on how people interact with tasks, technology and environments, helping leaders design safer systems. Concept tested: human factors in patient safety."
  },

  {
    category: "Reporting & Detection",
    question: "Following a procedure, a patient is returned to the operating room for removal of a sponge. If no incident report is completed, which source will most reliably identify the occurrence?",
    options: [
      "Peer review.",
      "Patient complaint.",
      "Claims data.",
      "Surgeon disclosure."
    ],
    correct: 2,
    explanation: "Administrative or claims data may capture return to surgery or retained foreign body even when an incident report is not filed. Concept tested: alternative safety event detection sources."
  },

  {
    category: "Human Factors & Technology",
    question: "A long-term care facility has increased occupational injuries among nursing staff and increased patient harm from unsafe patient handling. Which is the best human factors design solution?",
    options: [
      "Development of an organizational minimal lift policy.",
      "New lift equipment accessible at the point of care.",
      "A daily email with safe patient handling reminders.",
      "An education module on safe patient handling."
    ],
    correct: 1,
    explanation: "Human factors design changes the work system. Equipment available at the point of care is stronger than policy, reminders or education alone. Concept tested: ergonomic design and strong safety actions."
  },

  {
    category: "Human Factors & Technology",
    question: "The design of a piece of equipment contributes to an error. Which type of error has occurred?",
    options: [
      "Organizational.",
      "Latent.",
      "Active.",
      "Negligent."
    ],
    correct: 1,
    explanation: "Poor equipment design is a latent condition built into the system, waiting to combine with other factors and cause error. Concept tested: active versus latent failures."
  },

  {
    category: "Risk Assessment Tools",
    question: "A multidisciplinary team is focused on safe patient transfers to a long-term care facility and is conducting an FMEA. Which should be the first step?",
    options: [
      "Identify failure modes and causes.",
      "Analyze incident report data.",
      "Calculate the risk priority number.",
      "Determine the steps in the process."
    ],
    correct: 3,
    explanation: "FMEA begins by mapping or determining the process steps, then identifying failure modes at each step. Concept tested: FMEA sequence."
  },

  {
    category: "Leadership & Governance",
    question: "The purpose of patient safety goals is to:",
    options: [
      "Evaluate safety-related near misses.",
      "Assist surveyors during the accreditation process.",
      "Aggregate safety data to improve performance.",
      "Promote specific improvements in safety."
    ],
    correct: 3,
    explanation: "Patient safety goals are intended to focus organizations on specific, high-priority improvements that reduce harm. Concept tested: National Patient Safety Goals purpose."
  },

  {
    category: "Improvement Methodology",
    question: "A healthcare organization wishes to develop an education plan for quality and patient safety. Based on adult learning principles, the planned education is most likely to be effective when:",
    options: [
      "Training is provided by a subject matter expert, attendees can ask questions, and written materials are provided.",
      "Content is designed to meet accreditation standards, training is highly encouraged, and learners can obtain on-demand training.",
      "The program is delivered at the department level, staff are recognized for attendance, and written competency tests are administered.",
      "There is opportunity for active participation, staff recognize a need to learn, and the material is presented in a logical progression."
    ],
    correct: 3,
    explanation: "Adults learn best when the content is relevant, logically organized and actively involves them. Concept tested: adult learning for safety education."
  },

  {
    category: "Data & Measurement",
    question: "Over the past two months, a trend has been detected in medication errors. The preferred method of presenting data to the Nursing Quality Council will identify the nurse by:",
    options: [
      "Initials.",
      "Name.",
      "A confidential coding system.",
      "A coding system with the key attached to the report."
    ],
    correct: 2,
    explanation: "A confidential coding system protects individuals while allowing pattern analysis. Concept tested: confidential safety data reporting and non-punitive learning."
  },

  {
    category: "Data & Measurement",
    question: "A long-term care facility wants to analyze whether there is a relationship between the number of medications residents are prescribed and the number of falls residents experience. Which tool is most appropriate?",
    options: [
      "Pareto chart.",
      "Fishbone diagram.",
      "Histogram.",
      "Scatter diagram."
    ],
    correct: 3,
    explanation: "A scatter diagram is used to explore relationships between two numerical variables. Concept tested: choosing the right QI tool for correlation."
  },

  {
    category: "Leadership & Governance",
    question: "An effective method to increase an organization's board of directors' engagement in patient safety is to:",
    options: [
      "Foster teamwork and good communication at all levels and conduct training for both skill sets.",
      "Structure the board agenda so quality and safety are given the same amount of attention as financial issues.",
      "Focus on improvement projects that are important to the medical staff.",
      "Guide them through a recent FMEA conducted prior to launch of a new technology."
    ],
    correct: 1,
    explanation: "Board engagement improves when safety and quality are built into the board agenda at the same level as finance. Concept tested: governance responsibility for patient safety."
  },

  {
    category: "Data & Measurement",
    question: "A patient safety manager provided training on hand hygiene guidelines. The clinical manager is confident staff are following the guidelines. What is the best method to evaluate current compliance?",
    options: [
      "Collection of bacterial hand cultures.",
      "Direct observation of staff.",
      "Calculation of infection rates compared to baseline.",
      "A test with a passing score of 98%."
    ],
    correct: 1,
    explanation: "Direct observation evaluates actual hand hygiene behavior. Tests and cultures do not reliably measure routine compliance. Concept tested: compliance monitoring."
  },

  {
    category: "Human Factors & Technology",
    question: "Where in the process of ensuring correct surgery does a 'time-out' take place?",
    options: [
      "Just before leaving the unit.",
      "Immediately before surgery.",
      "Just before entering the operating room.",
      "Immediately upon arrival in the recovery room."
    ],
    correct: 1,
    explanation: "The time-out is performed immediately before starting the procedure to confirm patient, site, procedure and team readiness. Concept tested: surgical safety/time-out."
  },

  {
    category: "Risk Assessment Tools",
    question: "A hospital is considering changing the admissions process from the emergency department. To support patient safety during the design stage, what should the healthcare quality professional suggest?",
    options: [
      "Examine the new process for stability and variation using a control chart.",
      "Complete an FMEA of the new process.",
      "Conduct an RCA to predict errors in the new process.",
      "Analyze last year's incident reports using a Pareto chart."
    ],
    correct: 1,
    explanation: "FMEA is the proactive tool used during design or redesign to anticipate process failures before implementation. Concept tested: proactive safety planning."
  },

  {
    category: "Data & Measurement",
    question: "Using fall risk information, which patient population is at the highest risk for falling?",
    options: [
      "Has problems sleeping.",
      "Falls prior to admission.",
      "Needs help with toileting.",
      "Uses a cane."
    ],
    correct: 1,
    explanation: "A history of falls is one of the strongest predictors of future falls. Concept tested: fall risk prioritization."
  },

  {
    category: "Improvement Methodology",
    question: "Which is the most effective way to promote a safe transition of care to home for patients leaving a hospital?",
    options: [
      "Use the teach-back method for instructions and establish the first follow-up appointment.",
      "Provide written information and a reminder card to make a follow-up appointment.",
      "Send information to the patient's physician and advise the patient to return to the emergency department for concerns.",
      "Complete the discharge checklist and assign a transitions navigator to follow up in 10 days."
    ],
    correct: 0,
    explanation: "Teach-back confirms understanding and a scheduled follow-up closes a common transition gap. Concept tested: safe discharge and transition of care."
  },

  {
    category: "Human Factors & Technology",
    question: "A patient was found unresponsive on a medical-surgical floor after accidentally receiving two doses of a sedating agent that had not been ordered. Which would have helped prevent this error?",
    options: [
      "Automated dispensing machine (ADM).",
      "Radio frequency identification (RFID).",
      "Barcode medication administration (BCMA).",
      "Computerized provider order entry (CPOE)."
    ],
    correct: 2,
    explanation: "BCMA verifies the patient, medication and active order at the bedside before administration. Concept tested: medication administration safety technology."
  },

  {
    category: "Leadership & Governance",
    question: "A home healthcare organization is looking to identify third-party endorsed outcome measures for improvement in medication management, ambulation and pain. Which organization can best provide this information?",
    options: [
      "Leapfrog Group.",
      "The Joint Commission (TJC).",
      "URAC.",
      "National Quality Forum (NQF)."
    ],
    correct: 3,
    explanation: "NQF endorses standardized healthcare quality and outcome measures. Concept tested: national measure endorsement."
  },

  {
    category: "Leadership & Governance",
    question: "To best achieve a low rate of harm in spite of inherent risks in healthcare, an organization must:",
    options: [
      "Meet at least 95% of accreditation standards.",
      "Employ effective physician leaders.",
      "Apply principles of high reliability.",
      "Adopt a zero-tolerance for defect policy."
    ],
    correct: 2,
    explanation: "High reliability principles help organizations operate safely despite high risk and complexity. Concept tested: high reliability organizations."
  },

  {
    category: "Improvement Methodology",
    question: "The quality manager needs to identify a set of process measures to improve wound care outcomes. The first step should be to:",
    options: [
      "Search for evidence-based guidelines for wound care.",
      "Conduct clinical record review of wound care sentinel events.",
      "Perform a literature search for clinical trials relating to wound care.",
      "Review prior three years of wound outcome best practices."
    ],
    correct: 0,
    explanation: "Process measures should be grounded in evidence-based guidelines that define recommended care steps. Concept tested: evidence-based process measure selection."
  },

  {
    category: "Data & Measurement",
    question: "The healthcare quality professional is monitoring monthly fall rates. Which fall rate requires the most immediate investigation?",
    options: [
      "Two standard deviations above the fall rate average.",
      "A rate with a z-score of 1.5.",
      "Two standard deviations below the fall rate average.",
      "A rate with a z-score of -1.5."
    ],
    correct: 0,
    explanation: "A rate two standard deviations above average is a concerning high outlier compared with the options provided. Concept tested: identifying unusual safety performance."
  },

  {
    category: "Human Factors & Technology",
    question: "A healthcare quality professional is evaluating patient safety actions that will prevent errors of omission. Which system will most likely be effective?",
    options: [
      "A reminder system close to the task that provides sufficient information about what needs to be done.",
      "A warning system close to the task that cues the individual that they are about to initiate the wrong intervention.",
      "A proactive risk assessment system that integrates with the task and automatically notifies the risk manager.",
      "A detection system that notifies the team when an error occurred and provides a checklist for mitigation."
    ],
    correct: 0,
    explanation: "Errors of omission are missed actions, so task-based reminders help ensure the needed step is completed. Concept tested: omission versus commission errors."
  },

  {
    category: "Risk Assessment Tools",
    question: "Why is it important to convene a multidisciplinary team when conducting an FMEA?",
    options: [
      "So that all steps in the process are captured and evaluated.",
      "So effective evaluation of proposed changes may be accomplished.",
      "To gain buy-in from senior leadership.",
      "To help distribute the workload involved in an FMEA."
    ],
    correct: 0,
    explanation: "People from different roles understand different parts of the process, helping the team capture all steps and failure points. Concept tested: FMEA team composition."
  },

  {
    category: "Risk Assessment Tools",
    question: "A healthcare quality professional has been informed of a significant medication error resulting in patient harm. A multidisciplinary team should be selected to conduct a:",
    options: [
      "Multiple regression analysis.",
      "Variation analysis.",
      "Root cause analysis.",
      "Failure mode and effects analysis (FMEA)."
    ],
    correct: 2,
    explanation: "A harmful event has already occurred, so RCA is used to identify contributing causes and prevent recurrence. Concept tested: RCA versus FMEA."
  },

  {
    category: "Improvement Methodology",
    question: "A safety reporting system cannot produce reports in a usable format. After evaluating the existing system and other products on the market, what should the quality professional do before making recommendations to leadership?",
    options: [
      "Prepare a comparative analysis based on the information gathered.",
      "Conduct a focus group with participants from other sites within the organization.",
      "Interview current users of the other identified products.",
      "Create a potential implementation plan for the preferred product."
    ],
    correct: 0,
    explanation: "A comparative analysis summarizes options, benefits, limitations and usability before leadership recommendations. Concept tested: evaluating safety reporting systems."
  },

  {
    category: "Leadership & Governance",
    question: "The ultimate responsibility for ensuring and maintaining patient safety in a healthcare organization lies with the:",
    options: [
      "Governing body.",
      "Vice president of quality.",
      "CEO.",
      "Patient safety officer."
    ],
    correct: 0,
    explanation: "The governing body has ultimate accountability for quality and patient safety oversight. Concept tested: governance accountability."
  },

  {
    category: "Reporting & Detection",
    question: "A nurse inadvertently hung an IV medication on the wrong patient's IV pump but discovered the error before starting the infusion. Harm was averted and the nurse disclosed the error to a quality professional. What should the quality professional do?",
    options: [
      "Encourage the nurse to report the near-miss error through the adverse event reporting system.",
      "Recommend that the nurse undergo additional medication safety training.",
      "Perform no additional action since the error did not affect the patient and was disclosed.",
      "Report the nurse to the manager for not performing safety checks before administration."
    ],
    correct: 0,
    explanation: "Near misses should be reported so the organization can learn and strengthen barriers. Concept tested: near-miss reporting."
  },

  {
    category: "Risk Assessment Tools",
    question: "Which conclusion might be drawn from failure mode and effects analysis (FMEA)?",
    options: [
      "Key factors were identified, and corrective action plans were created.",
      "Actions were taken to address baseline performance and monitored for sustainment.",
      "Risks were identified and prioritized, and action plans were developed.",
      "Special causes were identified, and variation was reduced."
    ],
    correct: 2,
    explanation: "FMEA identifies and prioritizes risks prospectively, then develops action plans for the highest-risk failure modes. Concept tested: FMEA outputs."
  },

  {
    category: "Data & Measurement",
    question: "A hospital's Quality Council prioritized four initiatives using a matrix. Scores are: reduce patient falls by 10% = 100 strategic alignment, 20 patient impact, 60 risk; reduce wrong-site surgeries to zero = 90, 60, 90; reduce medication dispensing time by 20% = 90, 80, 30; reduce central line infections by 30% = 40, 90, 90. Which initiative should be highest priority?",
    options: [
      "Central line infections.",
      "Medication dispensing time.",
      "Wrong-site surgeries.",
      "Patient falls."
    ],
    correct: 2,
    explanation: "With equal weighting, wrong-site surgery has the highest total score: 90 + 60 + 90 = 240. Concept tested: prioritization matrix and patient risk."
  },

  {
    category: "Risk Assessment Tools",
    question: "The purpose of sentinel event review of never events is to:",
    options: [
      "Engage leadership in identifying barriers to effective communication.",
      "Identify individual performance gaps that resulted in the sentinel event.",
      "Monitor staff and leadership involvement in the systematic analysis.",
      "Specify sustainable systems-based improvements."
    ],
    correct: 3,
    explanation: "Sentinel event review should lead to sustainable, systems-based changes that reduce recurrence. Concept tested: sentinel event review purpose."
  },

  {
    category: "Risk Assessment Tools",
    question: "An RCA was conducted for delayed high-priority alarm response. Alarm fatigue was determined to be a root cause. What is the most appropriate first intervention?",
    options: [
      "Add visual indicators to the existing audible alerts.",
      "Review alarm signals for clinical appropriateness.",
      "Establish a written policy for alarm escalation.",
      "Implement a guideline with clear criteria for initiation of cardiac monitoring."
    ],
    correct: 1,
    explanation: "Alarm fatigue is usually driven by excessive or non-actionable alarms, so the first step is to review whether alarm signals are clinically appropriate. Concept tested: alarm safety and root cause action."
  },

  {
    category: "Safety Culture",
    question: "A healthcare organization has experienced a recent increase in falls with injury. Which leadership response best demonstrates that a safety culture is in place?",
    options: [
      "Acknowledge the injuries as systems errors.",
      "Hold the unit manager responsible for the increase.",
      "Require training of involved staff.",
      "Place involved staff on a corrective action plan."
    ],
    correct: 0,
    explanation: "A safety culture first looks for system contributors rather than blaming one manager or involved staff. Concept tested: just culture and systems thinking."
  },

  {
    category: "Risk Assessment Tools",
    question: "Which tool is used to assess points of vulnerability within a process?",
    options: [
      "Force field analysis.",
      "Histogram chart.",
      "Failure mode and effects analysis (FMEA).",
      "Kaizen."
    ],
    correct: 2,
    explanation: "FMEA identifies vulnerable points where a process can fail. Concept tested: process vulnerability assessment."
  },

  {
    category: "Data & Measurement",
    question: "A safety champion program was implemented to promote barcode medication scanning compliance. Unit A improved from 55% to 85% with 20 rounds; Unit B improved from 46% to 48% with 18 rounds; Unit C changed from 51% to 50% with 3 rounds. What conclusion can be made?",
    options: [
      "The CNO should reinforce safety champion rounding on Unit A.",
      "A different strategy to increase barcode medication scanning should be used on Unit B.",
      "Safety champion rounding was ineffective and should be reconsidered on Unit C.",
      "The use of safety champions was an effective intervention on Unit B."
    ],
    correct: 1,
    explanation: "Unit B had active implementation but minimal improvement, so the strategy is not working there and needs to change. Concept tested: evaluating intervention effectiveness."
  },

  {
    category: "Improvement Methodology",
    question: "A healthcare quality professional is evaluating a draft quality improvement plan for a new clinical service line. What should the professional focus on first?",
    options: [
      "Benchmarking with similar organizations.",
      "Evaluating selection of planned statistical techniques.",
      "Determining patient safety risk priorities.",
      "Ensuring appropriate tools will be used to display data."
    ],
    correct: 2,
    explanation: "For a new clinical service, patient safety risks should be identified before benchmarking, analysis methods or display tools. Concept tested: safety-first planning."
  },

  {
    category: "Leadership & Governance",
    question: "To best achieve a low rate of harm despite inherent risks in healthcare, an organization must:",
    options: [
      "Adopt a zero-tolerance for defect policy.",
      "Employ effective physician leaders.",
      "Meet at least 95% of accreditation standards.",
      "Apply principles of high reliability."
    ],
    correct: 3,
    explanation: "High reliability principles support safe performance in complex, high-risk environments. Concept tested: high reliability."
  },

  {
    category: "Improvement Methodology",
    question: "The purpose of a tracer is to:",
    options: [
      "Review the records of patients who received care on that day.",
      "Follow the care of the patient from entry into the organization to the end of an episode of care.",
      "Ask about issues related to workload, disciplinary actions, patient complaints, and delivery of care.",
      "Ask about the duties and responsibilities for each discipline working in the area."
    ],
    correct: 1,
    explanation: "A tracer follows the patient journey across departments to evaluate continuity, handoffs and safety processes. Concept tested: tracer methodology."
  },

  {
    category: "Safety Culture",
    question: "A nurse on a medical-surgical unit does not comply with barcode medication administration while caring for a patient. As her supervisor, how should you address this situation?",
    options: [
      "Ask staff if there are adequate scanners to meet their needs.",
      "Counsel the nurse on the importance of following policy.",
      "Request that the pharmacy run a report of BCMA compliance rates for the unit.",
      "Ask the nurse what was occurring at the time and why she chose to bypass the policy."
    ],
    correct: 3,
    explanation: "A just culture response begins by understanding the context and behavior before deciding whether this was human error, at-risk behavior or reckless behavior. Concept tested: Just Culture response."
  },

  {
    category: "Risk Assessment Tools",
    question: "Your organization is preparing to change to a new electronic health record. Many departments have been involved with planning this effort. What should be suggested as part of the preparation strategy?",
    options: [
      "Conduct a root cause analysis.",
      "Conduct a failure modes and effects analysis.",
      "Offer a Plan-Do-Study-Act session.",
      "Offer to do a claims analysis for related errors."
    ],
    correct: 1,
    explanation: "A new EHR is a major process and technology change, so FMEA should be used proactively to identify potential failure modes before implementation. Concept tested: proactive risk assessment for new technology."
  }

];
