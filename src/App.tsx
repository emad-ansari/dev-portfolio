import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";

function App() {
	return (
		<main className="bg-background text-foreground">
			<Nav />
			<Hero />
			<Marquee />
			<Work />
			<About />
			<Skills />
			<Education />
			<Achievements />
			<Contact />
		</main>
	);
}

export default App;
