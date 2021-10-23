// 0x07008040 - 0x07008140

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { spooky_09006800 } from "../../../../../textures/spooky"

const bbh_seg7_vertex_07008040 = [
    [[   435,    410,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   435,    486,     36], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   410,    486,     10], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   410,    410,     10], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   461,    486,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   410,    486,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   435,    486,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   461,    410,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   410,    410,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   461,    410,     10], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   435,    410,     36], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   461,    486,     10], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,    410,     10], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,    486,     36], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,    410,     36], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,    486,     10], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008140 - 0x07008240
const bbh_seg7_vertex_07008140 = [
    [[  1638,    410,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,    410,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,    410,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,    486,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,    486,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,    486,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,    486,     36], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,    486,     10], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,    410,     10], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   179,   1280,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   179,   1357,     36], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   154,   1357,     10], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   154,   1280,     10], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   1280,     10], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   1357,     10], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   179,   1280,     36], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008240 - 0x07008330
const bbh_seg7_vertex_07008240 = [
    [[   205,   1357,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   154,   1357,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   179,   1357,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   205,   1280,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[   179,   1280,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   154,   1280,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,   1280,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,   1357,     36], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,   1357,     10], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,   1280,     10], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,   1357,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,   1357,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,   1357,     36], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,   1280,     10], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  1587,   1280,     10], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008330 - 0x07008430
const bbh_seg7_vertex_07008330 = [
    [[  1638,   1280,     10], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,   1357,     36], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1613,   1280,     36], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1638,   1357,     10], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    461,   1485], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,    461,   1459], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    461,   1434], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    538,   1485], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    538,   1434], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,    538,   1459], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,    538,   1459], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    538,   1434], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    461,   1434], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    461,   1485], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,    538,   1485], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,    461,   1459], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008430 - 0x07008530
const bbh_seg7_vertex_07008430 = [
    [[  2038,   1280,    512], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,    512], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1357,    486], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1280,    486], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,    512], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1280,    486], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,    461], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,    512], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,    461], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1357,    486], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,    461], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,    461], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,   1843], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,   1843], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1357,   1818], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1280,   1818], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008530 - 0x07008620
const bbh_seg7_vertex_07008530 = [
    [[  2012,   1280,   1818], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1357,   1818], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,   1792], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,   1792], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,   1843], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1357,   1792], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2012,   1357,   1818], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,   1843], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  2038,   1280,   1792], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,   1434], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    410,   1459], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,   1485], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    486,   1459], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,   1434], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,   1485], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008620 - 0x07008720
const bbh_seg7_vertex_07008620 = [
    [[    10,    410,   1434], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,   1434], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    486,   1459], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    410,   1459], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    410,   1459], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,   1485], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,   1485], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,    614], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,    614], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    486,    640], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    410,    640], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    486,    640], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,    614], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,    666], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,    614], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,    666], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008720 - 0x07008820
const bbh_seg7_vertex_07008720 = [
    [[    36,    410,    640], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[    36,    486,    640], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    486,    666], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    10,    410,    666], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,   1382], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1280,   1408], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,   1434], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1357,   1408], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,   1382], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,   1434], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,   1382], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1357,   1408], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,   1382], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1280,   1408], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,   1434], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,   1434], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07008820 - 0x070088E0
const bbh_seg7_vertex_07008820 = [
    [[  -706,   1280,    614], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,    614], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1357,    640], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1280,    640], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1357,    640], 0, [   480,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,    614], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,    666], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,    614], 0, [   990,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,    666], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[  -680,   1280,    640], 0, [   478,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1357,    666], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -706,   1280,    666], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070088E0 - 0x07008B58
const bbh_seg7_dl_070088E0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, spooky_09006800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bbh_seg7_vertex_07008040, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  0,  8, 0x0),
    gsSP2Triangles( 9,  1, 10, 0x0,  9, 11,  1, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008140, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 1,  6,  7, 0x0,  1,  7,  8, 0x0),
    gsSP2Triangles( 9, 10, 11, 0x0,  9, 11, 12, 0x0),
    gsSP2Triangles(13, 14, 10, 0x0, 13, 10, 15, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008240, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 13,  6, 14, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008330, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 5, 10, 11, 0x0,  5, 11, 12, 0x0),
    gsSP2Triangles(13, 14, 10, 0x0, 13, 10, 15, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008430, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 5,  2, 10, 0x0,  5, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008530, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  0,  8, 0x0),
    gsSP2Triangles( 9, 10, 11, 0x0, 12, 13, 14, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008620, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  2,  5, 0x0,  4,  5,  6, 0x0),
    gsSP2Triangles( 7,  8,  9, 0x0,  7,  9, 10, 0x0),
    gsSP2Triangles(11, 12, 13, 0x0, 14, 10, 15, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008720, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles(10, 11,  5, 0x0, 10, 12, 11, 0x0),
    gsSP2Triangles(13, 14, 15, 0x0, 13, 11, 14, 0x0),
    gsSPVertex(bbh_seg7_vertex_07008820, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  7,  3,  8, 0x0),
    gsSP2Triangles( 9,  2, 10, 0x0,  9, 10, 11, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07008B58 - 0x07008BC8
export const bbh_seg7_dl_07008B58 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bbh_seg7_dl_070088E0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
