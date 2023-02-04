import { Jointer } from "../classes/jointer";
import { IReaction, Jointers } from "../interfaces/controller";
import { IReactionMaterial } from "../interfaces/material";
import { IReactionDefineMeta, ReactionType } from "../interfaces/metas";

export class GraphicalReaction implements IReaction {
  id: string;
  inputs: Jointers = {};
  outputs: Jointers = {};
  reactions: IReaction[] = [];
  constructor(private meta: IReactionDefineMeta, private materials: IReactionMaterial[]) {
    this.id = meta.id
    //第一步，解析节点
    this.constructReactions()

    //第二步， 构建连接关系
  }

  private constructReactions() {
    for (const reactionMeta of this.meta.logicMetas?.reactions || []) {
      switch (reactionMeta.type) {
        case ReactionType.Start:
          this.inputs[reactionMeta.id] = new Jointer(reactionMeta.id);
          break;
        case ReactionType.End:
          this.outputs[reactionMeta.id] = new Jointer(reactionMeta.id);
          break;
        case ReactionType.SingleReaction:
          const material = this.getMaterial(reactionMeta.materialName)
          if(material){
            
          }
          break;
        case ReactionType.ControllerDefaultReaction:
          break;
        case ReactionType.ControllerReaction:
          break;
      }
    }
  }

  private getMaterial(name:string){
    return this.materials.find(material=>material.name === name)
  }
}
