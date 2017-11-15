const TextFormat = {};
TextFormat.ESCAPE        = "\u00A7";
TextFormat.BLACK         = TextFormat.ESCAPE + "0";
TextFormat.DARK_BLUE     = TextFormat.ESCAPE + "1";
TextFormat.DARK_GREEN    = TextFormat.ESCAPE + "2";
TextFormat.DARK_AQUA     = TextFormat.ESCAPE + "3";
TextFormat.DARK_RED      = TextFormat.ESCAPE + "4";
TextFormat.DARK_PURPLE   = TextFormat.ESCAPE + "5";
TextFormat.GOLD          = TextFormat.ESCAPE + "6";
TextFormat.GRAY          = TextFormat.ESCAPE + "7";
TextFormat.DARK_GRAY     = TextFormat.ESCAPE + "8";
TextFormat.BLUE          = TextFormat.ESCAPE + "9";
TextFormat.GREEN         = TextFormat.ESCAPE + "a";
TextFormat.AQUA          = TextFormat.ESCAPE + "b";
TextFormat.RED           = TextFormat.ESCAPE + "c";
TextFormat.LIGHT_PURPLE  = TextFormat.ESCAPE + "d";
TextFormat.YELLOW        = TextFormat.ESCAPE + "e";
TextFormat.WHITE         = TextFormat.ESCAPE + "f";

TextFormat.OBFUSCATED    = TextFormat.ESCAPE + "k";
TextFormat.BOLD          = TextFormat.ESCAPE + "l";
TextFormat.STRIKETHROUGH = TextFormat.ESCAPE + "m";
TextFormat.UNDERLINE     = TextFormat.ESCAPE + "n";
TextFormat.ITALIC        = TextFormat.ESCAPE + "o";
TextFormat.RESET         = TextFormat.ESCAPE + "r";

module.exports = TextFormat;