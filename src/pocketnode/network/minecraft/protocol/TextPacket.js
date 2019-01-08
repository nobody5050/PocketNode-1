const DataPacket = pocketnode("network/minecraft/protocol/DataPacket");
const MinecraftInfo = pocketnode("network/minecraft/Info");

class TextPacket extends DataPacket {
	constructor(){
		super();
		this.initVars();
	}

	static get TYPE_RAW(){
		return 0
	}

	static get TYPE_CHAT(){
		return 1
	}

	static get TYPE_TRANSLATION(){
		return 2
	}

	static get TYPE_POPUP(){
		return 3
	}

	static get TYPE_JUKEBOX_POPUP(){
		return 4
	}

	static get TYPE_TIP(){
		return 5
	}

	static get TYPE_SYSTEM(){
		return 6
	}

	static get TYPE_WHISPER(){
		return 7
	}

	static get TYPE_ANNOUNCEMENT(){
		return 8
	}

	static getId(){
		return MinecraftInfo.TEXT_PACKET;
	}

	initVars(){
		this.type = -1;
		this.needsTranslation = false;
		this.sourceName = "";
		this.message = "";
		this.parameters = [];
		this.xuid = "";
		this.platformChatId = "";
	}

	_decodePayload(){
		this.type = this.readByte();
		this.needsTranslation = this.readBool();
		switch(this.type){
			case TextPacket.TYPE_CHAT:
			case TextPacket.TYPE_WHISPER:
			case TextPacket.TYPE_ANNOUNCEMENT:
				this.sourceName = this.readString();
			case TextPacket.TYPE_RAW:
			case TextPacket.TYPE_TIP:
			case TextPacket.TYPE_SYSTEM:
				this.message = this.readString();
				break;

			case TextPacket.TYPE_TRANSLATION:
			case TextPacket.TYPE_POPUP:
			case TextPacket.TYPE_JUKEBOX_POPUP:
				this.message = this.readString();
				let count = this.readUnsignedVarInt();
				for(let i = 0; i < count; ++i){
					this.parameters.push(this.readString());
				}
				break;
		}

		this.xuid = this.readString();
		this.platformChatId = this.readString();
	}

	_encodePayload(){
		this.writeByte(this.type);
		this.writeBool(this.needsTranslation);
		switch(this.type){
			case TextPacket.TYPE_CHAT:
			case TextPacket.TYPE_WHISPER:
			/** @noinspection */
			case TextPacket.TYPE_ANNOUNCEMENT:
				this.writeString(this.sourceName);
			case TextPacket.TYPE_RAW:
			case TextPacket.TYPE_TIP:
			case TextPacket.TYPE_SYSTEM:
				this.writeString(this.message);
				break;

			case TextPacket.TYPE_TRANSLATION:
			case TextPacket.TYPE_POPUP:
			case TextPacket.TYPE_JUKEBOX_POPUP:
				this.writeString(this.message);
				this.writeUnsignedVarInt(this.parameters.length);
				for(let i = 0; i < this.parameters.length; ++i){
					this.writeString(this.parameters[i]);
				}
				break;
		}

		this.writeString(this.xuid);
		this.writeString(this.platformChatId);
	}

	handle(session){
		return session.handleText(this);
	}
}

module.exports = TextPacket;