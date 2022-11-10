export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: "Name",
            type: "string",
        },
        {
            name: 'jobTitle',
            title: "JobTitle",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true, 
            },
        },
     {
      name: "dateStarted",
      title: "DateStarted",
      type: "string",
     },
     {
      name: "dateEnded",
      title: "DateEnded",
      type: "string",
     },
     {
      name: "IsCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
     },
     {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of:[{ type: "reference", to: {type: "skill"}}],
     },
     {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string"}],
     },
    ],
  }
  