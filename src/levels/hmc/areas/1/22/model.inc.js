// 0x07019430 - 0x07019448

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsSP1Triangle, gsDPPipeSync, gsDPSetCycleType,
    gsDPSetRenderMode, gsDPSetDepthSource, gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode,
    gsDPSetCombineMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_TX_CLAMP, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2,
    G_CC_SHADE
} from "../../../../../include/gbi"
import {
    cave_09009800, cave_09007800, cave_0900A800
} from "../../../../../textures/cave"

const hmc_seg7_lights_07019430 = gdSPDefLights1(
    0x79, 0x79, 0x79,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07019448 - 0x07019548
const hmc_seg7_vertex_07019448 = [
    [[  1076,   -409,  -4633], 0, [  4108,  -2408], [0xcd, 0x67, 0xcd, 0xff]],
    [[  1127,   -409,  -4786], 0, [  4158,  -2562], [0x00, 0x71, 0x38, 0xff]],
    [[  1076,   -409,  -4786], 0, [  4108,  -2562], [0xcd, 0x33, 0x67, 0xff]],
    [[  1127,   -409,  -4633], 0, [  4158,  -2408], [0x00, 0x38, 0x8f, 0xff]],
    [[ -2047,   -409,  -3276], 0, [   990,  -1054], [0x00, 0x59, 0x59, 0xff]],
    [[ -3583,   -409,  -2252], 0, [  -542,      0], [0x2a, 0x54, 0xac, 0xff]],
    [[ -2047,   -409,  -2252], 0, [   990,      0], [0x00, 0x59, 0xa7, 0xff]],
    [[ -3583,   -409,  -3276], 0, [  -542,  -1054], [0x67, 0x33, 0x33, 0xff]],
    [[  -799,   -409,  -3276], 0, [  2236,  -1054], [0x12, 0x68, 0x46, 0xff]],
    [[  -459,   -409,  -2252], 0, [  2574,      0], [0xcc, 0x49, 0xa7, 0xff]],
    [[    52,   -409,  -2764], 0, [  3086,   -544], [0xad, 0x5c, 0xeb, 0xff]],
    [[  -767,   -409,  -3308], 0, [  2268,  -1086], [0x4a, 0x5c, 0x2b, 0xff]],
    [[    52,   -409,  -3788], 0, [  3086,  -1566], [0xb6, 0x5c, 0xd5, 0xff]],
    [[  -767,   -409,  -4127], 0, [  2268,  -1904], [0x53, 0x5c, 0x15, 0xff]],
    [[   564,   -409,  -4300], 0, [  3596,  -2076], [0xeb, 0x5c, 0xad, 0xff]],
    [[   224,   -409,  -5119], 0, [  3258,  -2894], [0x2b, 0x5c, 0x4a, 0xff]],
];

// 0x07019548 - 0x07019588
const hmc_seg7_vertex_07019548 = [
    [[   224,   -409,  -5119], 0, [  3258,  -2894], [0x2b, 0x5c, 0x4a, 0xff]],
    [[   564,   -409,  -4300], 0, [  3596,  -2076], [0xeb, 0x5c, 0xad, 0xff]],
    [[  1076,   -409,  -4300], 0, [  4108,  -2076], [0xac, 0x54, 0xd6, 0xff]],
    [[  1076,   -409,  -5119], 0, [  4108,  -2894], [0xac, 0x2a, 0x54, 0xff]],
];

// 0x07019588 - 0x07019678
const hmc_seg7_vertex_07019588 = [
    [[  1076,   -153,  -4633], 0, [  1182,   1500], [0x9b, 0xdf, 0xbd, 0xff]],
    [[  1076,   -409,  -4300], 0, [  2012,   2012], [0xac, 0x54, 0xd6, 0xff]],
    [[  1076,    614,  -4300], 0, [  2012,      0], [0x9b, 0xdf, 0xbd, 0xff]],
    [[  1127,   -153,  -4633], 0, [  1182,   1500], [0x00, 0x8f, 0xc8, 0xff]],
    [[  1127,   -409,  -4633], 0, [  1182,   2012], [0x00, 0x38, 0x8f, 0xff]],
    [[  1076,   -409,  -4633], 0, [  1182,   2012], [0xcd, 0x67, 0xcd, 0xff]],
    [[  1076,   -409,  -5119], 0, [     0,   2012], [0xac, 0x2a, 0x54, 0xff]],
    [[  1076,   -409,  -4786], 0, [   798,   2012], [0xcd, 0x33, 0x67, 0xff]],
    [[  1076,   -153,  -4786], 0, [   798,   1500], [0x92, 0xc9, 0x1b, 0xff]],
    [[  1127,   -409,  -4786], 0, [   798,   2012], [0x00, 0x71, 0x38, 0xff]],
    [[  1127,   -153,  -4786], 0, [   798,   1500], [0x00, 0xc8, 0x71, 0xff]],
    [[  1076,    614,  -5119], 0, [     0,      0], [0xac, 0xac, 0x2a, 0xff]],
    [[ -2047,   3379,  -3276], 0, [     0,      0], [0x8f, 0x00, 0x38, 0xff]],
    [[ -2047,   2355,  -2252], 0, [  2522,   2012], [0xa7, 0x00, 0xa7, 0xff]],
    [[ -2047,   3379,  -2252], 0, [  2522,      0], [0xc8, 0x00, 0x8f, 0xff]],
];

// 0x07019678 - 0x07019758
const hmc_seg7_vertex_07019678 = [
    [[ -3583,   3379,  -3276], 0, [     0,      0], [0x69, 0x00, 0x46, 0xff]],
    [[ -2047,   2355,  -3276], 0, [  3800,   2012], [0xa7, 0x00, 0x59, 0xff]],
    [[ -2047,   3379,  -3276], 0, [  3800,      0], [0x8f, 0x00, 0x38, 0xff]],
    [[ -3583,   2355,  -3276], 0, [     0,   2012], [0x59, 0x00, 0x59, 0xff]],
    [[ -2047,   3379,  -2252], 0, [     0,      0], [0xc8, 0x00, 0x8f, 0xff]],
    [[ -2047,   2355,  -2252], 0, [     0,   2012], [0xa7, 0x00, 0xa7, 0xff]],
    [[ -3583,   2355,  -2252], 0, [  3800,   2012], [0x65, 0x00, 0xb4, 0xff]],
    [[ -3583,   3379,  -2252], 0, [  3800,      0], [0x71, 0x00, 0xc8, 0xff]],
    [[ -2047,   3379,  -3276], 0, [     0,      0], [0x8f, 0x00, 0x38, 0xff]],
    [[ -2047,   2355,  -3276], 0, [     0,   2012], [0xa7, 0x00, 0x59, 0xff]],
    [[ -2047,   2355,  -2252], 0, [  2522,   2012], [0xa7, 0x00, 0xa7, 0xff]],
    [[  -767,    614,  -4127], 0, [  -880,      0], [0x3e, 0x98, 0x24, 0xff]],
    [[    52,    614,  -2764], 0, [   480,      0], [0xb6, 0xa4, 0xd5, 0xff]],
    [[  -767,    614,  -3308], 0, [   -62,      0], [0x53, 0xa4, 0x15, 0xff]],
];

// 0x07019758 - 0x07019848
const hmc_seg7_vertex_07019758 = [
    [[ -3583,   2355,  -2252], 0, [     0,  -3508], [0x65, 0x00, 0xb4, 0xff]],
    [[ -3583,   -409,  -2252], 0, [     0,   2012], [0x2a, 0x54, 0xac, 0xff]],
    [[ -3583,   -409,  -3276], 0, [  2012,   2012], [0x67, 0x33, 0x33, 0xff]],
    [[ -3583,   2355,  -3276], 0, [  2012,  -3508], [0x59, 0x00, 0x59, 0xff]],
    [[  1076,    614,  -5119], 0, [ -1870,      0], [0xac, 0xac, 0x2a, 0xff]],
    [[   564,    614,  -4300], 0, [ -1052,      0], [0xdc, 0x98, 0xc2, 0xff]],
    [[   224,    614,  -5119], 0, [ -1870,      0], [0x1a, 0xb7, 0x63, 0xff]],
    [[  1076,    614,  -4300], 0, [ -1052,      0], [0x9b, 0xdf, 0xbd, 0xff]],
    [[  -767,    614,  -3308], 0, [   -62,      0], [0x53, 0xa4, 0x15, 0xff]],
    [[    52,    614,  -2764], 0, [   480,      0], [0xb6, 0xa4, 0xd5, 0xff]],
    [[  -459,    614,  -2252], 0, [   990,      0], [0xee, 0x98, 0xba, 0xff]],
    [[  -799,    614,  -3276], 0, [     0,      0], [0x34, 0xb7, 0x59, 0xff]],
    [[ -3583,   2355,  -2252], 0, [ -1562,   2012], [0x65, 0x00, 0xb4, 0xff]],
    [[ -3583,   2611,  -2687], 0, [  -478,   1500], [0x6e, 0xc9, 0xe5, 0xff]],
    [[ -3583,   3379,  -2252], 0, [ -1562,      0], [0x71, 0x00, 0xc8, 0xff]],
];

// 0x07019848 - 0x07019938
const hmc_seg7_vertex_07019848 = [
    [[  -767,    614,  -4127], 0, [  -880,      0], [0x3e, 0x98, 0x24, 0xff]],
    [[    52,    614,  -3788], 0, [  -542,      0], [0x9d, 0xb7, 0xe6, 0xff]],
    [[    52,    614,  -2764], 0, [   480,      0], [0xb6, 0xa4, 0xd5, 0xff]],
    [[ -2047,    614,  -3276], 0, [     0,      0], [0xd6, 0xac, 0x54, 0xff]],
    [[  -799,    614,  -3276], 0, [     0,      0], [0x34, 0xb7, 0x59, 0xff]],
    [[  -459,    614,  -2252], 0, [   990,      0], [0xee, 0x98, 0xba, 0xff]],
    [[ -2047,    614,  -2252], 0, [   990,      0], [0x99, 0xcd, 0xcd, 0xff]],
    [[ -2047,   2355,  -3276], 0, [     0,  -3304], [0xa7, 0x00, 0x59, 0xff]],
    [[ -2047,   2355,  -2252], 0, [   990,  -3304], [0xa7, 0x00, 0xa7, 0xff]],
    [[ -3583,   2355,  -2252], 0, [ -1562,   2012], [0x65, 0x00, 0xb4, 0xff]],
    [[ -3583,   2355,  -2687], 0, [  -478,   2012], [0x33, 0x33, 0x99, 0xff]],
    [[ -3583,   2611,  -2687], 0, [  -478,   1500], [0x6e, 0xc9, 0xe5, 0xff]],
    [[ -3583,   3379,  -3276], 0, [   990,      0], [0x69, 0x00, 0x46, 0xff]],
    [[ -3583,   3379,  -2252], 0, [ -1562,      0], [0x71, 0x00, 0xc8, 0xff]],
    [[ -3634,   2611,  -2687], 0, [  -478,   1500], [0x00, 0xc8, 0x8f, 0xff]],
];

// 0x07019938 - 0x070199D8
const hmc_seg7_vertex_07019938 = [
    [[ -3583,   2611,  -2687], 0, [  -478,   1500], [0x6e, 0xc9, 0xe5, 0xff]],
    [[ -3634,   2611,  -2841], 0, [   -94,   1500], [0x00, 0x8f, 0x38, 0xff]],
    [[ -3583,   2611,  -2841], 0, [   -94,   1500], [0x65, 0xdf, 0x43, 0xff]],
    [[ -3583,   3379,  -3276], 0, [   990,      0], [0x69, 0x00, 0x46, 0xff]],
    [[ -3634,   2611,  -2687], 0, [  -478,   1500], [0x00, 0xc8, 0x8f, 0xff]],
    [[ -3583,   2355,  -2687], 0, [  -478,   2012], [0x33, 0x33, 0x99, 0xff]],
    [[ -3634,   2355,  -2687], 0, [  -478,   2012], [0x00, 0x71, 0xc8, 0xff]],
    [[ -3583,   2355,  -2841], 0, [   -94,   2012], [0x33, 0x67, 0x33, 0xff]],
    [[ -3634,   2355,  -2841], 0, [   -94,   2012], [0x00, 0x38, 0x71, 0xff]],
    [[ -3583,   2355,  -3276], 0, [   990,   2012], [0x59, 0x00, 0x59, 0xff]],
];

// 0x070199D8 - 0x07019AD8
const hmc_seg7_vertex_070199D8 = [
    [[  -459,    614,  -2252], 0, [     0,      0], [0xee, 0x98, 0xba, 0xff]],
    [[  -459,   -409,  -2252], 0, [     0,   2012], [0xcc, 0x49, 0xa7, 0xff]],
    [[ -2047,   -409,  -2252], 0, [  3930,   2012], [0x00, 0x59, 0xa7, 0xff]],
    [[ -3583,   2355,  -3276], 0, [ -4566,  -3508], [0x59, 0x00, 0x59, 0xff]],
    [[ -3583,   -409,  -3276], 0, [ -4566,   2012], [0x67, 0x33, 0x33, 0xff]],
    [[ -2047,   -409,  -3276], 0, [ -1500,   2012], [0x00, 0x59, 0x59, 0xff]],
    [[ -2047,   2355,  -3276], 0, [ -1500,  -3508], [0xa7, 0x00, 0x59, 0xff]],
    [[ -2047,    614,  -3276], 0, [ -1500,      0], [0xd6, 0xac, 0x54, 0xff]],
    [[  -799,   -409,  -3276], 0, [   990,   2012], [0x12, 0x68, 0x46, 0xff]],
    [[ -2047,   2355,  -2252], 0, [  3930,  -3508], [0xa7, 0x00, 0xa7, 0xff]],
    [[ -3583,   -409,  -2252], 0, [  7762,   2012], [0x2a, 0x54, 0xac, 0xff]],
    [[ -3583,   2355,  -2252], 0, [  7762,  -3508], [0x65, 0x00, 0xb4, 0xff]],
    [[ -2047,    614,  -2252], 0, [  3930,      0], [0x99, 0xcd, 0xcd, 0xff]],
    [[  -799,    614,  -3276], 0, [     0,      0], [0x34, 0xb7, 0x59, 0xff]],
    [[  -767,   -409,  -3308], 0, [    82,   2012], [0x4a, 0x5c, 0x2b, 0xff]],
    [[  -767,    614,  -3308], 0, [    82,      0], [0x53, 0xa4, 0x15, 0xff]],
];

// 0x07019AD8 - 0x07019BC8
const hmc_seg7_vertex_07019AD8 = [
    [[ -2047,    614,  -3276], 0, [ -1500,      0], [0xd6, 0xac, 0x54, 0xff]],
    [[  -799,   -409,  -3276], 0, [   990,   2012], [0x12, 0x68, 0x46, 0xff]],
    [[  -799,    614,  -3276], 0, [   990,      0], [0x34, 0xb7, 0x59, 0xff]],
    [[    52,    614,  -3788], 0, [ -2840,      0], [0x9d, 0xb7, 0xe6, 0xff]],
    [[    52,   -409,  -2764], 0, [  -796,   2012], [0xad, 0x5c, 0xeb, 0xff]],
    [[    52,    614,  -2764], 0, [  -796,      0], [0xb6, 0xa4, 0xd5, 0xff]],
    [[  -459,   -409,  -2252], 0, [   990,   2012], [0xcc, 0x49, 0xa7, 0xff]],
    [[  -459,    614,  -2252], 0, [   990,      0], [0xee, 0x98, 0xba, 0xff]],
    [[    52,   -409,  -3788], 0, [ -2840,   2012], [0xb6, 0x5c, 0xd5, 0xff]],
    [[  -799,    614,  -3276], 0, [     0,      0], [0x34, 0xb7, 0x59, 0xff]],
    [[  -799,   -409,  -3276], 0, [     0,   2012], [0x12, 0x68, 0x46, 0xff]],
    [[  -767,   -409,  -3308], 0, [    82,   2012], [0x4a, 0x5c, 0x2b, 0xff]],
    [[   224,    614,  -5119], 0, [  5014,      0], [0x1a, 0xb7, 0x63, 0xff]],
    [[   224,   -409,  -5119], 0, [  5014,   2012], [0x2b, 0x5c, 0x4a, 0xff]],
    [[  1076,   -409,  -5119], 0, [  6528,   2012], [0xac, 0x2a, 0x54, 0xff]],
];

// 0x07019BC8 - 0x07019CB8
const hmc_seg7_vertex_07019BC8 = [
    [[  -767,    614,  -3308], 0, [    82,      0], [0x53, 0xa4, 0x15, 0xff]],
    [[  -767,   -409,  -3308], 0, [    82,   2012], [0x4a, 0x5c, 0x2b, 0xff]],
    [[  -767,   -409,  -4127], 0, [  1514,   2012], [0x53, 0x5c, 0x15, 0xff]],
    [[  -767,    614,  -4127], 0, [  1514,      0], [0x3e, 0x98, 0x24, 0xff]],
    [[   564,    614,  -4300], 0, [ -4628,      0], [0xdc, 0x98, 0xc2, 0xff]],
    [[    52,   -409,  -3788], 0, [ -2840,   2012], [0xb6, 0x5c, 0xd5, 0xff]],
    [[    52,    614,  -3788], 0, [ -2840,      0], [0x9d, 0xb7, 0xe6, 0xff]],
    [[   564,   -409,  -4300], 0, [ -4628,   2012], [0xeb, 0x5c, 0xad, 0xff]],
    [[   224,   -409,  -5119], 0, [  5014,   2012], [0x2b, 0x5c, 0x4a, 0xff]],
    [[   224,    614,  -5119], 0, [  5014,      0], [0x1a, 0xb7, 0x63, 0xff]],
    [[  1076,    614,  -4300], 0, [ -5396,      0], [0x9b, 0xdf, 0xbd, 0xff]],
    [[  1076,   -409,  -4300], 0, [ -5396,   2012], [0xac, 0x54, 0xd6, 0xff]],
    [[  -767,    614,  -4127], 0, [     0,      0], [0x3e, 0x98, 0x24, 0xff]],
    [[   564,    614,  -4300], 0, [   742,      0], [0xdc, 0x98, 0xc2, 0xff]],
    [[    52,    614,  -3788], 0, [   216,      0], [0x9d, 0xb7, 0xe6, 0xff]],
];

// 0x07019CB8 - 0x07019D18
const hmc_seg7_vertex_07019CB8 = [
    [[   224,    614,  -5119], 0, [  5014,      0], [0x1a, 0xb7, 0x63, 0xff]],
    [[  1076,   -409,  -5119], 0, [  6528,   2012], [0xac, 0x2a, 0x54, 0xff]],
    [[  1076,    614,  -5119], 0, [  6528,      0], [0xac, 0xac, 0x2a, 0xff]],
    [[  -767,    614,  -4127], 0, [     0,      0], [0x3e, 0x98, 0x24, 0xff]],
    [[   224,    614,  -5119], 0, [   990,      0], [0x1a, 0xb7, 0x63, 0xff]],
    [[   564,    614,  -4300], 0, [   742,      0], [0xdc, 0x98, 0xc2, 0xff]],
];

// 0x07019D18 - 0x07019DC8
const hmc_seg7_dl_07019D18 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_09009800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(hmc_seg7_lights_07019430.l, 1),
    gsSPLight(hmc_seg7_lights_07019430.a, 2),
    gsSPVertex(hmc_seg7_vertex_07019448, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 6,  8,  4, 0x0,  8,  9, 10, 0x0),
    gsSP2Triangles( 6,  9,  8, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(11, 10, 12, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(13, 12, 14, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019548, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07019DC8 - 0x07019F70
const hmc_seg7_dl_07019DC8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_09007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_07019588, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  4, 0x0),
    gsSP2Triangles( 0,  4,  5, 0x0,  0,  5,  1, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  7,  9, 10, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0,  6,  8, 11, 0x0),
    gsSP2Triangles( 8,  0,  2, 0x0,  8,  2, 11, 0x0),
    gsSP2Triangles( 8,  3,  0, 0x0, 12, 13, 14, 0x0),
    gsSP1Triangle( 8, 10,  3, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019678, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019758, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP1Triangle(12, 13, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019848, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  6,  8, 0x0),
    gsSP2Triangles( 7,  3,  6, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles(11, 12, 13, 0x0, 10, 14, 11, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019938, 10, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 0,  4,  1, 0x0,  5,  6,  4, 0x0),
    gsSP2Triangles( 7,  6,  5, 0x0,  2,  1,  8, 0x0),
    gsSP2Triangles( 2,  7,  9, 0x0,  2,  9,  3, 0x0),
    gsSP2Triangles( 2,  8,  7, 0x0,  7,  8,  6, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07019F70 - 0x0701A080
const hmc_seg7_dl_07019F70 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_0900A800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_070199D8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  5,  8, 0x0),
    gsSP2Triangles( 9,  2, 10, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019AD8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 3,  8,  4, 0x0,  9, 10, 11, 0x0),
    gsSP1Triangle(12, 13, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019BC8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 3,  2,  8, 0x0,  3,  8,  9, 0x0),
    gsSP2Triangles(10,  7,  4, 0x0, 10, 11,  7, 0x0),
    gsSP1Triangle(12, 13, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_07019CB8, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0701A080 - 0x0701A150
export const hmc_seg7_dl_0701A080 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(960, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_07019D18),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 6, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_07019DC8),
    gsSPDisplayList(hmc_seg7_dl_07019F70),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
