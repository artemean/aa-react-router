import type {Route} from "./+types/about";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About us" },
        { name: "description", content: "About page" },
    ]
}

export default function About (){
    return (
        <div>
            <h1 className="text-lg font-bold mb-2">About us</h1>
            <p>We are great people.</p>
        </div>
    );
}
