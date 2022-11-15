<div align="center">
	<br />
	<p>
		<a href="https://disploy.dev"><img src="https://disploy.dev/img/logo.svg" alt="disploy" width="200" /></a>
	</p>
    <p>
		<a href="https://vercel.com/?utm_source=disploy&utm_campaign=oss"><img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Vercel" /></a>
	</p>
    <h3>
        Disploy Deno Template
    </h3>
	<br />
	<p>
		<a href="https://discord.gg/E3z8MDnTWn"><img src="https://img.shields.io/discord/901426442242498650?color=5865F2&logo=discord&logoColor=white" alt="Disploy's Discord server" /></a>
		<a href="https://github.com/disploy/Disploy/actions"><img src="https://github.com/Disploy/disploy/actions/workflows/tests.yml/badge.svg" alt="Tests status" /></a>
	</p>

</div>

## Overview

This is a minimal template that utilises Disploy without it's CLI and runs on Deno.
You can deploy easily to [Deno Deploy](https://deno.com/deploy) once the `npm:` import specifier is implemented into Deno Deploy, for now you can only run via the [Deno CLI](https://deno.land/manual@v1.28.0/getting_started/installation).

## Workflow

* Deploy commands

```sh
$ deno task deploy
```

* Start

```sh
$ deno task start
```

* Tunnel
```sh
# ngrok is a great way to reverse proxy to the public internet
$ ngrok http 8000
```

## Need Help?

https://discord.gg/E3z8MDnTWn - Join our Discord server for support and updates!