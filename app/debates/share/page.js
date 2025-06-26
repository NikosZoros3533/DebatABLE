import { shareDebate } from "@/app/lib/actions";

export default function ShareDebatePage() {
    return (
        <div className="max-w-lg mx-auto my-8 p-8 rounded-lg">
            <h2 className="text-center mb-6 text-2xl font-semibold text-primary">Add a New Debate</h2>
            <form action={shareDebate}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-medium text-secondary">Debate Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter debate title"
                        className="w-full p-2 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium text-secondary">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Describe the debate topic"
                        rows={4}
                        className="w-full p-2 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sideA" className="block mb-2 font-medium text-secondary">Side A</label>
                    <input
                        type="text"
                        id="sideA"
                        name="sideA"
                        placeholder="Enter argument for Side A"
                        className="w-full p-2 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="sideB" className="block mb-2 font-medium text-secondary">Side B</label>
                    <input
                        type="text"
                        id="sideB"
                        name="sideB"
                        placeholder="Enter argument for Side B"
                        className="w-full p-2 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-primary text-secondary rounded font-semibold text-lg hover:bg-secondary hover:cursor-grab hover:text-primary transition"
                >
                    Add Debate
                </button>
            </form>
        </div>
    );
}
