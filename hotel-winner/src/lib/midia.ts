/**
 * Detecta, na hora do build, se o vídeo do topo da home existe em public/videos/.
 * Sem arquivos, o site usa a ilustração. Com arquivos, usa o vídeo. Nada a configurar.
 * Os arquivos são gerados por scripts/preparar-video.sh.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const existe = (caminho: string) => existsSync(join(process.cwd(), 'public', caminho));

export const temWebm = existe('videos/hero.webm');
export const temMp4 = existe('videos/hero.mp4');
export const temVideoHero = temWebm || temMp4;
export const temPosterHero = existe('videos/hero-poster.jpg');
