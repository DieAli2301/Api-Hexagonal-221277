"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastController = void 0;
class PodcastController {
    constructor(registerPodcast) {
        this.registerPodcast = registerPodcast;
    }
    agregarPodcast(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const podcastId = req.body.id;
            const podcastName = req.body.name;
            const podcastProducer = req.body.producer;
            const podcastDuration = req.body.duration;
            const podcastCategoria = req.body.categoria;
            console.log("holA", req.body.id);
            const resultado = yield this.registerPodcast.agregarPodcast(podcastId, podcastName, podcastProducer, podcastDuration, podcastCategoria);
            res.status(200).send(`Usuario ${resultado} registrado con éxito`);
        });
    }
}
exports.PodcastController = PodcastController;
