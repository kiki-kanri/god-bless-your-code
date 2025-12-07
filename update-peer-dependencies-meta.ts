import {
    readFile,
    writeFile,
} from 'node:fs/promises';

const requiredPeerDependencies: string[] = [];

const packageJson = JSON.parse(await readFile('./package.json', 'utf-8'));
const peerDependenciesMeta: Record<string, { optional: boolean }> = {};
for (const peerDependency of Object.keys(packageJson.peerDependencies)) {
    if (!requiredPeerDependencies.includes(peerDependency)) peerDependenciesMeta[peerDependency] = { optional: true };
}

packageJson.peerDependenciesMeta = peerDependenciesMeta;
await writeFile('./package.json', `${JSON.stringify(packageJson, null, 2)}\n`);
