/// <reference types="react" />
interface SCProps {
    sc_project: number;
    sc_security: string;
    sc_image_url?: string;
    disableBackLink?: boolean;
}
declare const StatCounter: ({ sc_project, sc_security, sc_image_url, disableBackLink }: SCProps) => JSX.Element;
export default StatCounter;
