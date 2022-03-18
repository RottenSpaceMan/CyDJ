export function formatBadgeToHtml(url) {
  return `<span class="avatar"><img src="${url}" /></span>`;
}

class Twitch {
  static OWL =
      'https://cdn.discordapp.com/attachments/915656975696687124/916116916702158948/OWL.png';
}

class Xqc {
  static SUB_0_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022295254937652/0-Month_Subscriber.png';
  static SUB_0_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022295473057862/2000-Month_Subscriber.png';
  static SUB_0_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022295686971442/3000-Month_Subscriber.png';
  static SUB_2_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022535622115328/2-Month_Subscriber.png';
  static SUB_2_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022535831814155/2002-Month_Subscriber.png';
  static SUB_2_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022536062521374/3002-Month_Subscriber.png';
  static SUB_3_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022622767181864/3-Month_Subscriber.png';
  static SUB_3_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022623056576562/2003-Month_Subscriber.png';
  static SUB_3_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022623287267398/3003-Month_Subscriber.png';
  static SUB_6_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022766510149682/6-Month_Subscriber.png';
  static SUB_6_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022766736658452/2006-Month_Subscriber.png';
  static SUB_6_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022766984130640/3006-Month_Subscriber.png';
  static SUB_9_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022823489789972/9-Month_Subscriber.png';
  static SUB_9_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022823703674910/2009-Month_Subscriber.png';
  static SUB_9_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022824169259018/3009-Month_Subscriber.png';
  static SUB_12_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022894918795304/12-Month_Subscriber.png';
  static SUB_12_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022895199805440/2012-Month_Subscriber.png';
  static SUB_12_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022895422107648/3012-Month_Subscriber.png';
  static SUB_18_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022962866507846/18-Month_Subscriber.png';
  static SUB_18_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022963105570877/2018-Month_Subscriber.png';
  static SUB_18_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916022963411771392/3018-Month_Subscriber.png';
  static SUB_24_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023017929310339/24-Month_Subscriber.png';
  static SUB_24_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023018134835291/2024-Month_Subscriber.png';
  static SUB_24_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023018315206726/3024-Month_Subscriber.png';
  static SUB_30_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023065576636426/30-Month_Subscriber.png';
  static SUB_30_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023065761165403/2030-Month_Subscriber.png';
  static SUB_30_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023065966690324/3030-Month_Subscriber.png';
  static SUB_36_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023136565207040/36-Month_Subscriber.png';
  static SUB_36_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023136770723870/2036-Month_Subscriber.png';
  static SUB_36_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023136942706749/3036-Month_Subscriber.png';
  static SUB_42_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023290441637959/42-Month_Subscriber.png';
  static SUB_42_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023290672349254/2042-Month_Subscriber.png';
  static SUB_42_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023291213410344/3042-Month_Subscriber.png';
  static SUB_48_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023373505650758/48-Month_Subscriber.png';
  static SUB_48_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023373786656768/2048-Month_Subscriber.png';
  static SUB_48_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023374097051708/3048-Month_Subscriber.png';
  static SUB_54_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023417508098108/54-Month_Subscriber.png';
  static SUB_54_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023417793298463/2054-Month_Subscriber.png';
  static SUB_54_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023418070114304/3054-Month_Subscriber.png';
  static SUB_60_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023503910735882/60-Month_Subscriber.png';
  static SUB_60_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023504170799184/2060-Month_Subscriber.png';
  static SUB_60_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023504376332298/3060-Month_Subscriber.png';
  static SUB_66_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023570788913182/66-Month_Subscriber.png';
  static SUB_66_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023571028013176/2066-Month_Subscriber.png';
  static SUB_66_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023571212546108/3066-Month_Subscriber.png';
  static SUB_72_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023616469106698/72-Month_Subscriber.png';
  static SUB_72_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023616670421042/2072-Month_Subscriber.png';
  static SUB_72_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023616863354921/3072-Month_Subscriber.png';
  static SUB_78_MONTHS_T1 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023666947543110/78-Month_Subscriber.png';
  static SUB_78_MONTHS_T2 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023667278905405/2078-Month_Subscriber.png';
  static SUB_78_MONTHS_T3 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916023667543117824/3078-Month_Subscriber.png';

  static GIFT_SUBS_500 =
      'https://cdn.discordapp.com/attachments/915656975696687124/916100252342300733/500_Gift_Subs.png';

  static BITS_100 =
      'https://cdn.discordapp.com/attachments/915656975696687124/915713189109444718/100_Bits.png';
  static BITS_1000 =
      'https://cdn.discordapp.com/attachments/915656975696687124/915713247716442182/1000_Bits.png';
  static BITS_100000 =
      'https://cdn.discordapp.com/attachments/915656975696687124/915713532006375464/100000_Bits.png';
}

export const USER_BADGES = {
  'ZimnLech': [
    'https://dl.dropboxusercontent.com/s/89gv8fvyr49vnev/kobato-icon-small.jpg',
  ],
  'JohnRG123': [
    'https://media.discordapp.net/attachments/915490680468561990/915492628508868648/die.png',
    'https://cdn.discordapp.com/attachments/899888900611375184/901313787951480862/small.png',
  ],
  'mrfart2323': [
    Xqc.SUB_12_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/899888900611375184/917638191723450418/Gigachad_1.jpg',
  ],
  'IP0G': [
    Xqc.BITS_100000,
    'https://cdn.discordapp.com/attachments/679270173567614987/907384062807789598/1_25x25.gif',
  ],
  'ACCOUNT2': [
    Xqc.SUB_12_MONTHS_T1,
    'https://media.discordapp.net/attachments/899888900611375184/901380813243944970/EZ_1.png',
  ],
  'Zombsiee': [
    'https://media.discordapp.net/attachments/899888900611375184/901570550034477076/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png',
  ],
  'GiveMeAnOnion': [
    Xqc.SUB_18_MONTHS_T1,
    'https://images-ext-1.discordapp.net/external/V-pZ97hRKTpvONRbEeYiG2tdmVBH11KU0u2KooeIU1g/https/i.imgur.com/CTJoS3c.png',
  ],
  'jensai1': [
    Xqc.SUB_12_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/904501042148958219/916844473051389972/ezgif-3-79f6e07d0543.gif',
  ],
  'ContraVz': [
    'https://media.discordapp.net/attachments/899888900611375184/903429579274846248/VIPBadge.png',
    'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
  ],
  'seagrade': [
    Xqc.SUB_30_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/907369587979460720/917657328013176833/dankspin3.gif',
  ],
  'Xsogon': [
    Xqc.SUB_18_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/905159869626187817/920394576999637042/Porcellio_Expansus_PFP.png',
  ],
  'spintto': [
    'https://cdn.discordapp.com/attachments/679270173567614987/908197729249919006/ezgif-4-78928f8a284c.gif',
  ],
  'HentaiQueen': [
    'https://cdn.discordapp.com/attachments/679270173567614987/908795988544729198/ezgif-6-268375e001ab.gif',
  ],
  'gustme': [
    Xqc.SUB_9_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/915650094697693184/921144650088194098/ezgif.com-gif-maker_27.gif',
  ],
  'BlooDerg': [
    'https://media.discordapp.net/attachments/880765465318817852/914342333414244372/ok.gif',
  ],
  'jesus_knuckles': [
    'https://media.discordapp.net/attachments/914591356003946507/914592520305012796/stupidskullfart.png',
  ],
  'airforce2700': [
    Xqc.SUB_12_MONTHS_T1,
    'https://cdn.betterttv.net/emote/6091a20a39b5010444d0b980/1x.gif',
  ],
  'Skully_OW': [
    Xqc.SUB_30_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
  ],
  'n3r1': [
    Xqc.SUB_24_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/915650094697693184/931998299181949029/ezgif.com-gif-maker_1.gif',
  ],
  'notjuham': [
    Xqc.SUB_36_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/891695154333884447/922151274303070229/notjuham1818.png',
  ],
  'Pugnator': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'IIPsilocybin': [
    Xqc.GIFT_SUBS_500,
  ],
  'Uns1asher': [
    Xqc.SUB_9_MONTHS_T1,
  ],
  'jeffboys123': [
    Xqc.SUB_24_MONTHS_T1,
  ],
  'alyjiah17': [
    Twitch.OWL,
  ],
  'brcfrmn': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'Frostee115': [
    Xqc.SUB_0_MONTHS_T1,
  ],
  'moldnugget': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'eljulidi1337': [
    Xqc.SUB_6_MONTHS_T3,
    'https://cdn.discordapp.com/attachments/891695154333884447/922146791862988810/ezgif.com-gif-maker_28.gif',
  ],
  'pepegaOverheat': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'Captkayy': [
    Xqc.SUB_6_MONTHS_T3,
  ],
  'PeepoGlad': [
    Xqc.BITS_100,
    'https://cdn.discordapp.com/attachments/719709749423112284/917509143353507912/1xend.gif',
  ],
  'MrNiTe': [
    Xqc.SUB_9_MONTHS_T1,
  ],
  'l_charles_l': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'Enzo_SuperCraftZ': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'Physikz': [
    Xqc.SUB_36_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
  ],
  'LEBB': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'feelssunnyman': [
    Xqc.SUB_9_MONTHS_T3,
    'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
  ],
  'T_Nizzy': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'Getronix': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'Jamoki_3090': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'BryG05': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'SenileCookie': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'BryG05': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'SenileCookie': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'isiete': [
    Xqc.SUB_9_MONTHS_T1,
  ],
  'xQt0001': [
    Xqc.SUB_12_MONTHS_T3,
  ],
  'ayyvollet': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'Tzuqi': [
    Xqc.SUB_9_MONTHS_T1,
  ],
  'MrDestructoidCyDJ': [
    'https://cdn.discordapp.com/attachments/679270173567614987/922352061356572682/1x_4.gif',
  ],
  'CaribbeanCam': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'Bananaman3100': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'Betelgeun': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'HikkenNoAce': [
    Xqc.SUB_6_MONTHS_T3,
  ],
  'CannabisMuffin': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'LEBB': [
    Xqc.SUB_12_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/915650094697693184/933641907052118016/Lebb.jpeg',
  ],
  'Psychedelic111': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'aade_': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'parsekktv': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'T_Nizzy': [
    Xqc.SUB_9_MONTHS_T1,
    'https://media.discordapp.net/attachments/905159869626187817/945147116337106964/35235235.gif',
  ],
  'zHardTimes': [
    Xqc.SUB_18_MONTHS_T1,
    'https://media.discordapp.net/attachments/915650094697693184/932461255560691772/ezgif.com-gif-maker_2.gif',
  ],
  'anirrroc': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'Reesesses': [
    Xqc.SUB_9_MONTHS_T1,
  ],
  'DeathGod': [
    Xqc.SUB_12_MONTHS_T1,
    'https://cdn.discordapp.com/attachments/915650094697693184/937539803581411358/xqcdespair.gif',
  ],
  'MasterA1G': [
    Xqc.SUB_24_MONTHS_T1,
  ],
  'xqcPeepo': [
    Xqc.SUB_0_MONTHS_T1,
  ],
  'the7entity': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'Yaekaii': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'cerasuz': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'RoboSheepz': [
    Xqc.SUB_9_MONTHS_T1,
  ],
  'nate338': [
    Xqc.SUB_24_MONTHS_T1,
  ],
  'pbgod1337': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'Spockacus': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'SHEEEEEEEEEEEEEEEESH': [
    'https://cdn.discordapp.com/attachments/915650094697693184/937061024748675112/ezgif.com-gif-maker_3.gif',
  ],
  'sydniartis': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'Loi_561': [
    'https://cdn.discordapp.com/attachments/915490680468561990/945090131499581440/loi.gif',
  ],
  'CherrySlushy': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'echotify': [
    Xqc.SUB_3_MONTHS_T1,
  ],
  'JasonNew116': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'mmmmmmeat': [
    Xqc.SUB_12_MONTHS_T1,
  ],
  'lfeelgreat': [
    Xqc.SUB_18_MONTHS_T1,
  ],
  'Gil3344': [
    Xqc.SUB_6_MONTHS_T1,
  ],
  'Coconut19': [
    Xqc.SUB_12_MONTHS_T1,
  ],
};
