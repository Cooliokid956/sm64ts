// 0x0700A7F0 - 0x0700A808

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetEnvColor, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES,
    G_CC_MODULATERGBFADE, G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD,
    G_TX_RENDERTILE, G_ON, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { sl_seg7_texture_07001000 } from "../texture.inc"

const sl_seg7_lights_0700A7F0 = gdSPDefLights1(
    0x7f, 0x7f, 0x7f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700A808 - 0x0700A848
const sl_seg7_vertex_0700A808 = [
    [[  -101,      0,    102], 0, [   734,    734], [0x00, 0x7f, 0x00, 0xff]],
    [[   102,      0,    102], 0, [   734,    224], [0x00, 0x7f, 0x00, 0xff]],
    [[  -101,      0,   -101], 0, [   224,    734], [0x00, 0x7f, 0x00, 0xff]],
    [[   102,      0,   -101], 0, [   224,    224], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x0700A848 - 0x0700A890
const sl_seg7_dl_0700A848 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, sl_seg7_texture_07001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(sl_seg7_lights_0700A7F0.l, 1),
    gsSPLight(sl_seg7_lights_0700A7F0.a, 2),
    gsSPVertex(sl_seg7_vertex_0700A808, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A890 - 0x0700A910
export const sl_seg7_dl_0700A890 = [
    gsDPPipeSync(),
    gsDPSetEnvColor(255, 255, 255, 100),
    gsDPSetCombineMode(G_CC_MODULATERGBFADE, G_CC_MODULATERGBFADE),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(sl_seg7_dl_0700A848),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPEndDisplayList(),
].flat();

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
