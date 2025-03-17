import Form from 'next/form'
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";

export default function Contact() {
    return (
        <Form action="/">
            <div className="">
                <div className="flex w-full gap-2 mb-5">
                    <Input id="name" type="text" name="name" label="Name"/>
                    <Input id="email" type="email" name="email" label="Email"/>
                </div>
                <Textarea id="message" name="message" label="Message"/>
            </div>
        </Form>
    );
}
