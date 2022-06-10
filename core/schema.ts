export interface Schema {}

interface Base<TTagName extends string> {
  tagName: TTagName;
}

export type Node = Annotation;

export interface Annotation extends Base<"xsd:annotation"> {
  documentation?: Documentation;
}

export interface Any extends Base<"xsd:any"> {}

export interface Attribute extends Base<"xsd:attribute"> { }

export interface ComplexType extends Base<"xsd:complexType"> { }

export interface Documentation extends Base<"xsd:documentation"> {
  text: string;
}
