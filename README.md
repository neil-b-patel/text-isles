# Text Isles

Text Isles is a choose-your-own adventure text-based game.

Enter a sandbox where there are no defined victory/defeat conditions, rules, or mechanics.
You can shape yourself, the world, and the story, as you'd like.

Want to bust into rhymes with a group of flying aliens? You got it.
Feel like being exposed to Eldritch horrors and ascending humanity? Do it.
Need to know why your emotional unavailability sabotages any chances you have of making lasting, loving relationships? **Go to therapy** - a game, let only this one, will _not_ help you.

![](demo/demo.gif)

## Design

The game stack is composed of two major parts - the Chat UI and the LLM Server.
The Chat UI is written with Next.js, while the chosen LLM Server is Ollama.

The stack is designed with local hosting in mind.
While the Chat UI could be hosted with ease, I have strong reservations about hosting my own LLM server or using an existing LLM service provider.
These concerns include cost, environmental impact, data usage and privacy, and complexity.

Even with free tiers of LLM service providers, I cannot justify this hobby project - made in the spirit of fun and whimsy - contributing towards the training new models and encouraging the destructive and anti-consumer practices of such companies.

If you disagree, feel free to adjust the source code so you can use a self-hosted or existing LLM server.

## Usage

You can either run the game stack natively or use Docker to containerize parts of the game stack.

MacOS users are out of luck for GPU-passthrough to the Ollama LLM server required for the game.
As a result, using the Docker Compose approach will limit MacOS users to CPU-only utilization.

Regardless of your chosen approach, begin by cloning this [repository](https://github.com/neil-b-patel/text-isles).

### Native LLM Server

For this appraoch, you will need to install [Ollama](https://ollama.com/) so the LLM server can be ran locally.

1. Run `ollama pull llama3.2`
2. Run `ollama serve`

This should pull the required LLM model and start the API server on http://localhost:11434/.
If you visit that endpoint, you should be able to see a `Ollama is running` message.

#### Native Chat UI

1. Run `corepack enable`
2. Run `yarn install`
3. Run `yarn build`
4. Run `yarn start`

This should run the frontend server on http://localhost:3000/.

#### Containerized Chat UI

1. Run `./scripts/run.sh`

This should build an image based off of `Dockerfile`, run it as a container, and expose the frontend server on http://localhost:3000/.

### Dockerized Chat UI and LLM Server

Like noted above, GPU-passthrough is not possible with the Ollama Server and Docker on certain platforms like MacOS.
If you are able to get GPU-passthrough working on your machine or CPU-only usage is acceptable,
feel free to use this approach.

1. Run `docker compose up`

This should run the Ollama LLM server and Chat UI as containers that share a network.
The API server should be epxosed on http://localhost:11434/.
If you visit that endpoint, you should be able to see a `Ollama is running` message.
The frontend server should be exposed on http://localhost:3000/.
