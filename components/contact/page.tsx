import Form from 'next/form'
import Input from "@/components/form/input/page";

export default function Contact() {
    return (
        <Form action="/">
            <div className="">
                <div className="flex w-full gap-2 mb-10">
                    <Input id="name" type="text" name="name" label="Name"/>
                    <Input id="email" type="email" name="email" label="Email"/>
                </div>
                <textarea name=""></textarea>
                <button type="submit">Submit</button>
            </div>
        </Form>
    );
}
