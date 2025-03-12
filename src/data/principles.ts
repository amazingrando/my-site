interface Principle {
  text: string;
  colspan?: number;
  rowspan?: number;
  textSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | null;
}

export const principles: Principle[] = [
  {
    text: "Efficiency through laziness",
    colspan: 1,
    rowspan: 1,
    textSize: null
  },
  {
    text: "Assume positive intent",
    colspan: 1,
    rowspan: 1,
    textSize: null
  },
  {
    text: "The only real apology is corrected behavior.",
    colspan: 2,
    rowspan: 1,
    textSize: '3xl'
  },
  {
    text: "Wit is the salt of the conversation, not the food.",
    colspan: 2,
    rowspan: 1,
    textSize: '3xl'
  },
  {
    text: "You can't control your emotions but you can control your actions.",
    colspan: 2,
    rowspan: 1,
    textSize: null
  },
  {
    text: "Every time someone steps up and says who they are, the world becomes a better, more interesting place.",
    colspan: 2,
    rowspan: 2,
    textSize: null
  },
  {
    text: "Better an oops than a what if.",
    colspan: 1,
    rowspan: 1,
    textSize: null
  },
  {
    text: "Better a horrible end than unending horror.",
    colspan: 1,
    rowspan: 1,
    textSize: null
  },
  {
    text: "Tolerate failure, not incompetence.",
    colspan: 2,
    rowspan: 1,
    textSize: '3xl'
  }
]; 