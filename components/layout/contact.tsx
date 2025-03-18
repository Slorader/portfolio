import Form from 'next/form'
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";

export default function Contact() {
    return (
        <Form action="">
            <div className="flex w-full gap-2 mb-2">
                <Input id="name" type="text" name="name" label="Name"/>
                <Input id="email" type="email" name="email" label="Email"/>
            </div>
            <Textarea id="message" name="message" label="Message"/>
            <Button id="button" name="button" label="Submit"/>
        </Form>
    );
}
