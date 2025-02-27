"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/IndexRT.generated.ts
  var _IndexRTBase = class _IndexRTBase extends Laya.Scene {
  };
  __name(_IndexRTBase, "IndexRTBase");
  var IndexRTBase = _IndexRTBase;

  // src/IndexRT.ts
  var { regClass } = Laya;
  var IndexRT = class extends IndexRTBase {
    onAwake() {
      this.d3Btn.visible = false;
    }
    onEnable() {
      console.log("IndexRT onEnable");
      this.uiBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
        Laya.Scene.open("scenes/UiMain.ls");
        console.log("点击了ui按钮");
      });
      this.phyBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
        Laya.Scene.open("scenes/PhysicsGameMain.ls");
        console.log("点击了物理按钮");
      });
      if (Laya.Browser.onChrome || Laya.Browser.onEdge || Laya.Browser.onIE || Laya.Browser.onSafari || Laya.Browser.onFirefox) {
        this.d3Btn.visible = true;
        this.d3Btn.on(Laya.Event.MOUSE_DOWN, this, () => {
          Laya.Scene.open("scenes/D3Main.ls");
          console.log("点击了3D混合按钮");
        });
      }
    }
  };
  __name(IndexRT, "IndexRT");
  IndexRT = __decorateClass([
    regClass("c2d4957a-f24c-44f0-8120-fa761cf86aa7", "../src/IndexRT.ts")
  ], IndexRT);

  // src/ItemBox.generated.ts
  var _ItemBoxBase = class _ItemBoxBase extends Laya.Box {
  };
  __name(_ItemBoxBase, "ItemBoxBase");
  var ItemBoxBase = _ItemBoxBase;

  // src/ItemBox.ts
  var { regClass: regClass2, property } = Laya;
  var Script = class extends ItemBoxBase {
    constructor() {
      super();
      this.text = "";
    }
    get dataSource() {
      return super.dataSource;
    }
    set dataSource(value) {
      super.dataSource = value;
      if (!value)
        return;
      if (value.avatar) {
        let redHot = this.getChildByName("avatar").getChildByName("redHot");
        redHot.visible = value.avatar.redHot.visible;
      }
      if (value.flag) {
        let flagText = this.getChildByName("flag").getChildByName("flagText");
        flagText.text = value.flag.flagText.text;
      }
    }
  };
  __name(Script, "Script");
  __decorateClass([
    property({ type: "string" })
  ], Script.prototype, "text", 2);
  Script = __decorateClass([
    regClass2("73edd2a2-7bbb-4563-a6e4-44f2d93ac172", "../src/ItemBox.ts")
  ], Script);

  // src/LoadingRT.generated.ts
  var _LoadingRTBase = class _LoadingRTBase extends Laya.Scene {
  };
  __name(_LoadingRTBase, "LoadingRTBase");
  var LoadingRTBase = _LoadingRTBase;

  // src/LoadingRT.ts
  var { regClass: regClass3 } = Laya;
  var LoadingRT = class extends LoadingRTBase {
    onAwake() {
      Laya.loader.load(
        //先加载本场景要用的
        ["resources/UI/image.png", "resources/UI/progress.png", "resources/UI/progress$bar.png"]
      ).then(() => {
        let resArr = [
          "resources/UI/images/bg/background.jpg",
          "resources/UI/images/bg/bg14.png",
          "resources/UI/images/bg/img_bg4.png",
          "resources/UI/images/bg/bg.png",
          "resources/UI/images/demo/fcs.jpg",
          "resources/UI/images/demo/whs.jpg",
          "resources/UI/direction.png",
          { url: "resources/UI/images/bag.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/bg.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/cd.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/comp.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/images/test.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/role/atlasAni/139x.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/role/frameAni/role.atlas", type: Laya.Loader.ATLAS },
          { url: "resources/UI/role/spineAni/dragon.sk", type: Laya.Loader.BUFFER },
          { url: "resources/UI/role/spineAni/goblins.sk", type: Laya.Loader.BUFFER },
          { url: "resources/UI/role/spineAni/spineboy-pma.skel", type: Laya.Loader.SPINE },
          { url: "scenes/Index.ls", type: Laya.Loader.HIERARCHY },
          { url: "scenes/UiMain.ls", type: Laya.Loader.HIERARCHY },
          { url: "scenes/PhysicsGameMain.ls", type: Laya.Loader.HIERARCHY },
          { url: "scenes/D3Main.ls", type: Laya.Loader.HIERARCHY },
          { url: "scenes/uiDemo/Msg.ls", type: Laya.Loader.HIERARCHY },
          { url: "scenes/uiDemo/page/OpenMainScene.ls", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/useUI/ChangeTexture.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/useUI/MouseThrough.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/useUI/PhysicalCollision.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/useUI/Progress.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/useUI/TextShow.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/page/Dialog.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/page/Win.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/page/IframeElement.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/page/UsePanel.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/BagList.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/ComboBox.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/LoopList.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/MailList.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/Refresh.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/TreeBox.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/list/TreeList.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/animation/AtlasAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/animation/FrameAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/animation/SkeletonAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/animation/TimelineAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/animation/TweenAni.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/interactive/Astar.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/interactive/Joystick.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/interactive/ShapeDetection.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/uiDemo/interactive/tiledMap.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/Bullet.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/closeBtn.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/ComboList.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/defaultButton.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/defaultLabel.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/DropBox.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/LoopImg.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/role.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/ani/cd.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/ani/refresh.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/3d/girl/girl.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/3d/LayaMonkey/LayaMonkey.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/3d/trail/Cube.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/ani/refresh.lh", type: Laya.Loader.HIERARCHY },
          { url: "prefab/ani/cd.lh", type: Laya.Loader.HIERARCHY },
          { url: "resources/sound/destroy.wav", type: Laya.Loader.BUFFER },
          { url: "resources/sound/hit.wav", type: Laya.Loader.BUFFER },
          { url: "resources/files/layaAir.mp4", type: Laya.Loader.BUFFER }
        ];
        Laya.loader.load(resArr, null, Laya.Handler.create(this, this.onLoading, null, false)).then(() => {
          this.progress.value = 0.98;
          console.log("加载结束", this.progress.value);
          Laya.timer.once(1e3, this, () => {
            Laya.Scene.open("scenes/Index.ls");
          });
        });
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
      });
    }
    /**
    * 当报错时打印错误
    * @param err 报错信息
    */
    onError(err) {
      console.log("加载失败: " + err);
    }
    /**
     * 加载时侦听
     */
    onLoading(progress) {
      if (progress > 0.92)
        this.progress.value = 0.95;
      else
        this.progress.value = progress;
      console.log("加载进度: " + progress, this.progress.value);
    }
  };
  __name(LoadingRT, "LoadingRT");
  LoadingRT = __decorateClass([
    regClass3("c6669a60-6f00-435c-82d3-ba6bfc9bf23c", "../src/LoadingRT.ts")
  ], LoadingRT);

  // src/prefab/Bullet.ts
  var { regClass: regClass4, property: property2 } = Laya;
  var Bullet = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      let rig = this.owner.getComponent(Laya.RigidBody);
      rig.setVelocity({ x: 0, y: -10 * Laya.Physics2DOption.pixelRatio });
    }
    onTriggerEnter(other, self, contact) {
      this.owner.removeSelf();
    }
    onUpdate() {
      if (this.owner.y < -10) {
        this.owner.removeSelf();
      }
    }
    onDisable() {
      Laya.Pool.recover("bullet", this.owner);
    }
  };
  __name(Bullet, "Bullet");
  Bullet = __decorateClass([
    regClass4("8485cffa-ef7f-45f7-88c0-f2e13463631b", "../src/prefab/Bullet.ts")
  ], Bullet);

  // src/prefab/CloseBtn.ts
  var { regClass: regClass5, property: property3 } = Laya;
  var CloseBtn = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
    }
    onClick(e) {
      Laya.stage.width = 1334;
      Laya.stage.height = 750;
      Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
      Laya.Scene.open("scenes/Index.ls");
    }
    onDisable() {
      this.owner.off(Laya.Event.MOUSE_DOWN, this);
    }
  };
  __name(CloseBtn, "CloseBtn");
  CloseBtn = __decorateClass([
    regClass5("0d00ae76-294e-46f3-af30-cee14c7f22ef", "../src/prefab/CloseBtn.ts")
  ], CloseBtn);

  // src/scence/physicsDemo/PhysicsGameMain.ts
  var { regClass: regClass6, property: property4 } = Laya;
  var PhysicsGameMain = class extends Laya.Script {
    constructor() {
      super();
      /** @prop {name:createBoxInterval,tips:"间隔多少毫秒创建一个下跌的容器",type:int,default:1000}*/
      this.createBoxInterval = 1e3;
      /**开始时间*/
      this._time = 0;
      /**是否已经开始游戏 */
      this._started = false;
      /**是否停止每帧更新 */
      this.updateStop = false;
    }
    onEnable() {
      let resArr = [
        "resources/UI/images/test/b1.png"
      ];
      Laya.loader.load(resArr).then((res) => {
        this._time = Date.now();
        this._gameBox = this.owner.getChildByName("gameBox");
        Laya.stage.on(Laya.Event.BLUR, this, () => {
          this.updateStop = true;
        });
        Laya.stage.on(Laya.Event.FOCUS, this, () => {
          this.updateStop = false;
        });
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStageClick);
      });
    }
    //涉及到与屏幕适配相关逻辑，必须要放到onStart里，否则就可能因适配值没计算完，导致一系列的问题
    onStart() {
      let _ground = this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);
      _ground.width = Laya.stage.width;
    }
    onUpdate() {
      if (this.updateStop)
        return;
      let now = Date.now();
      if (now - this._time > this.createBoxInterval && this._started) {
        this._time = now;
        this.createBox();
      }
    }
    createBox() {
      let box = Laya.Pool.getItemByCreateFun("dropBox", this.dropBox.create, this.dropBox);
      box.pos(Math.random() * (Laya.stage.width - 100), -100);
      this._gameBox.addChild(box);
    }
    onStageClick(e) {
      e.stopPropagation();
      let flyer = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
      flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
      this._gameBox.addChild(flyer);
    }
    /**开始游戏，通过激活本脚本方式开始游戏*/
    startGame() {
      if (!this._started) {
        this._started = true;
        this.enabled = true;
      }
    }
    /**结束游戏，通过非激活本脚本停止游戏 */
    stopGame() {
      this._started = false;
      this.enabled = false;
      this.createBoxInterval = 1e3;
      this._gameBox.removeChildren();
    }
  };
  __name(PhysicsGameMain, "PhysicsGameMain");
  __decorateClass([
    property4({ type: Laya.Prefab })
  ], PhysicsGameMain.prototype, "dropBox", 2);
  __decorateClass([
    property4({ type: Laya.Prefab })
  ], PhysicsGameMain.prototype, "bullet", 2);
  PhysicsGameMain = __decorateClass([
    regClass6("e622606d-f0a2-4a7e-9173-cba901f1ed8c", "../src/scence/physicsDemo/PhysicsGameMain.ts")
  ], PhysicsGameMain);

  // src/scence/physicsDemo/PhysicsGameMainRT.generated.ts
  var _PhysicsGameMainRTBase = class _PhysicsGameMainRTBase extends Laya.Scene {
  };
  __name(_PhysicsGameMainRTBase, "PhysicsGameMainRTBase");
  var PhysicsGameMainRTBase = _PhysicsGameMainRTBase;

  // src/scence/physicsDemo/PhysicsGameMainRT.ts
  var { regClass: regClass7, property: property5 } = Laya;
  var PhysicsGameMainRT = class extends PhysicsGameMainRTBase {
    constructor() {
      super();
      PhysicsGameMainRT.instance = this;
    }
    onEnable() {
      this._control = this.getComponent(PhysicsGameMain);
      this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);
    }
    onTipClick(e) {
      this.tipLbll.visible = false;
      this._score = 0;
      this.scoreLbl.text = "分数：";
      this._control.startGame();
    }
    /**增加分数 */
    addScore(value = 1) {
      this._score += value;
      this.scoreLbl.text = "分数：" + this._score;
      if (this._control.createBoxInterval > 600 && this._score % 20 == 0)
        this._control.createBoxInterval -= 20;
    }
    /**停止游戏 */
    stopGame() {
      this.tipLbll.visible = true;
      this.tipLbll.text = "游戏结束了，点击屏幕重新开始";
      this._control.stopGame();
    }
  };
  __name(PhysicsGameMainRT, "PhysicsGameMainRT");
  PhysicsGameMainRT = __decorateClass([
    regClass7("63952401-a6e2-4e05-8565-09c12f512913", "../src/scence/physicsDemo/PhysicsGameMainRT.ts")
  ], PhysicsGameMainRT);

  // src/prefab/DropBox.ts
  var { regClass: regClass8, property: property6 } = Laya;
  var DropBox = class extends Laya.Script {
    constructor() {
      super();
      /**盒子等级 */
      this.level = 1;
    }
    onEnable() {
      this._rig = this.owner.getComponent(Laya.RigidBody);
      this.level = Math.round(Math.random() * 5) + 1;
      this._text = this.owner.getChildByName("levelTxt");
      this._text.text = this.level + "";
    }
    onUpdate() {
      this.owner.rotation++;
    }
    onTriggerEnter(other, self, contact) {
      var owner = this.owner;
      if (other.label === "buttle") {
        if (this.level > 1) {
          this.level--;
          this._text.text = this.level + "";
          owner.getComponent(Laya.RigidBody).setVelocity({ x: 0, y: -10 });
          Laya.SoundManager.playSound("resources/sound/hit.wav");
        } else {
          if (owner.parent) {
            let effect = Laya.Pool.getItemByCreateFun("effect", this.createEffect, this);
            effect.pos(owner.x, owner.y);
            owner.parent.addChild(effect);
            effect.play(0, true);
            owner.removeSelf();
            Laya.SoundManager.playSound("resources/sound/destroy.wav");
          }
        }
        PhysicsGameMainRT.instance.addScore(1);
      } else if (other.label === "ground") {
        owner.removeSelf();
        PhysicsGameMainRT.instance.stopGame();
      }
    }
    /**使用对象池创建爆炸动画 */
    createEffect() {
      let ani = new Laya.Animation();
      ani.loadAnimation("resources/ani/TestAni.ani");
      ani.on(Laya.Event.COMPLETE, null, recover);
      function recover() {
        ani.removeSelf();
        Laya.Pool.recover("effect", ani);
      }
      __name(recover, "recover");
      return ani;
    }
    onDisable() {
      Laya.Pool.recover("dropBox", this.owner);
    }
  };
  __name(DropBox, "DropBox");
  __decorateClass([
    property6({ type: "number" })
  ], DropBox.prototype, "level", 2);
  DropBox = __decorateClass([
    regClass8("dcbdb734-214b-4808-9e50-0a6a4eb56809", "../src/prefab/DropBox.ts")
  ], DropBox);

  // src/prefab/Role.ts
  var { regClass: regClass9, property: property7 } = Laya;
  var Event = Laya.Event;
  var Keyboard = Laya.Keyboard;
  var Role = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.virtualKey = false;
      /** 移动的方向 */
      this.moveDirection = "";
      /** 角色方向状态 */
      this.directionStates = { up: false, down: false, left: false, right: false };
      /** 是否正在移动 */
      this.isMoving = false;
    }
    onEnable() {
      this._animator = this.owner.getComponent(Laya.Animator2D);
      this.bg = this.owner.parent;
      if (this.virtualKey) {
        this.bindDirectionalInput(this.up, "up");
        this.bindDirectionalInput(this.down, "down");
        this.bindDirectionalInput(this.left, "left");
        this.bindDirectionalInput(this.right, "right");
      }
    }
    /*
     * 处理虚拟键盘方向与事件状态
     * @param button 按键
     * @param direction 方向
     * */
    bindDirectionalInput(button, direction) {
      button.on(Event.MOUSE_DOWN, this, () => this.setDirection(direction));
      button.on(Event.MOUSE_UP, this, this.resetDirection);
      button.on(Event.MOUSE_OUT, this, this.resetDirection);
    }
    /** 设置移动方向与状态 */
    setDirection(direction) {
      this.moveDirection = direction;
      this.isMoving = true;
      this.directionStates[direction] = true;
    }
    /** 重置移动方向与状态 */
    resetDirection() {
      this.directionStates[this.moveDirection] = false;
      this.updateMovementDirection();
    }
    onUpdate() {
      if (this.isMoving) {
        this.directionPress(this.moveDirection);
      }
    }
    /**
     * 虚拟方向键按下时
     * @param direction 角色移动方向
     */
    directionPress(direction) {
      switch (direction) {
        case "up":
          if (this.owner.y > 80) {
            this.owner.y -= 2;
          }
          break;
        case "down":
          if (this.owner.y < this.bg.height - 130) {
            this.owner.y += 2;
          }
          break;
        case "left":
          if (this.owner.x > 30) {
            this.owner.x -= 2;
          }
          break;
        case "right":
          if (this.owner.x < this.bg.width - 130) {
            this.owner.x += 2;
          }
          break;
      }
      this.playRoleAni(direction, "run");
    }
    /** 播放动画
     * @param name 动画名称
     * @param type 动画类型，跑:run，站:stand
     */
    playRoleAni(name, type = "stand") {
      this._animator.play(type == "run" ? "run" + name.substring(0, 1).toUpperCase() + name.substring(1) : name);
    }
    onKeyDown(e) {
      this.updateDirectionState(e, true);
      this.updateMovementDirection();
    }
    //键盘按键抬起时
    onKeyUp(e) {
      this.updateDirectionState(e, false);
      this.updateMovementDirection();
    }
    /** 
     * 更新方向状态
     * @param e 事件对象
     * @param isPressed 是否按下
     */
    updateDirectionState(e, isPressed) {
      const key = e["keyCode"];
      switch (key) {
        case Keyboard.UP:
        case Keyboard.W:
          this.directionStates.up = isPressed;
          break;
        case Keyboard.DOWN:
        case Keyboard.S:
          this.directionStates.down = isPressed;
          break;
        case Keyboard.LEFT:
        case Keyboard.A:
          this.directionStates.left = isPressed;
          break;
        case Keyboard.RIGHT:
        case Keyboard.D:
          this.directionStates.right = isPressed;
          break;
      }
    }
    /** 
     * 更新移动方向 
     */
    updateMovementDirection() {
      this.isMoving = false;
      for (const dir of ["up", "down", "left", "right"]) {
        if (this.directionStates[dir]) {
          this.moveDirection = dir;
          this.isMoving = true;
          this.playRoleAni(dir, "run");
          break;
        }
      }
      if (!this.isMoving)
        this.playRoleAni(this.moveDirection);
    }
    /** 
     * 禁用时的清理
     */
    onDisable() {
      if (this.virtualKey) {
        this.up.off(Event.MOUSE_DOWN, this, this.setDirection);
        this.down.off(Event.MOUSE_DOWN, this, this.setDirection);
        this.left.off(Event.MOUSE_DOWN, this, this.setDirection);
        this.right.off(Event.MOUSE_DOWN, this, this.setDirection);
      }
    }
  };
  __name(Role, "Role");
  __decorateClass([
    property7({ type: Boolean })
  ], Role.prototype, "virtualKey", 2);
  __decorateClass([
    property7({ type: Laya.Sprite, hidden: "!data.virtualKey" })
  ], Role.prototype, "up", 2);
  __decorateClass([
    property7({ type: Laya.Sprite, hidden: "!data.virtualKey" })
  ], Role.prototype, "down", 2);
  __decorateClass([
    property7({ type: Laya.Sprite, hidden: "!data.virtualKey" })
  ], Role.prototype, "left", 2);
  __decorateClass([
    property7({ type: Laya.Sprite, hidden: "!data.virtualKey" })
  ], Role.prototype, "right", 2);
  Role = __decorateClass([
    regClass9("0e49c2ec-1e7b-4998-bed3-d333d3dd9d69", "../src/prefab/Role.ts")
  ], Role);

  // src/scence/d3Demo/D3Main.ts
  var { regClass: regClass10, property: property8 } = Laya;
  var KeyBoardManager = Laya.InputManager;
  var Keyboard2 = Laya.Keyboard;
  var Vector3 = Laya.Vector3;
  var D3Main = class extends Laya.Script {
    constructor() {
      super(...arguments);
      //这里是为了展示装饰器绑定节点的使用
      /** 拖尾的当前转向 */
      this.turnLeft = true;
      /** 当前所处的旋转方位 */
      this._rotation = new Vector3(0, 0, 0);
      this.rotationW = new Vector3(0, 180, 0);
      this.rotationS = new Vector3(0, 0, 0);
      this.rotationA = new Vector3(0, -90, 0);
      this.rotationD = new Vector3(0, 90, 0);
      this.sp3Role = new Laya.Sprite3D();
    }
    onEnable() {
      this.spRole = this.owner.addChild(new Laya.Sprite());
      this.setStage();
      this._3Dto2D("resources/3d/girl/girl.lh", this.spRole, 1, true);
      this.spRole.pos(30, 768);
      this._3Dto2D("resources/3d/trail/Cube.lh", this.spTrail, 2);
      this.spTrail.pos(100, 500);
    }
    /** 重置舞台相关的设置
     * @readme 由于上一个场景是横屏的，切到竖屏游戏的时候，需要修改一些初始化的舞台设置，否则就会有问题。
     * 当然，这只是故意实现的特例，正常情况下，不需要这样做，横屏还是竖屏，最好统一起来。
     */
    setStage() {
      Laya.stage.width = 640;
      Laya.stage.height = 1136;
      if (Laya.Browser.onPC) {
        Laya.stage.useRetinalCanvas = false;
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
      } else {
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
      }
    }
    /** 加载3D精灵画到2D Texture上 
     * @param lh 模型的字符串路径
     * @param sp 2D精灵节点，用于画3D的texture
     * @param layer 手动指定层ID
     * @param isRole 是否是可以被控制的主角
    */
    _3Dto2D(lh, sp, layer, isRole = false) {
      Laya.loader.load(lh).then((res) => {
        let sp3 = res.create();
        this.scene3D.addChild(sp3);
        let _camera = new Laya.Camera(0, 0.1, 1e3);
        this.scene3D.addChild(_camera);
        _camera.transform.rotate(new Vector3(-45, 0, 0), false, false);
        _camera.clearColor = new Laya.Color(0, 0, 0, 0);
        _camera.orthographic = true;
        _camera.orthographicVerticalSize = 10;
        _camera.removeAllLayers();
        _camera.addLayer(layer);
        if (isRole)
          sp3.getChildAt(0).getChildAt(1).layer = layer;
        else
          sp3.getChildAt(0).getChildAt(0).layer = layer;
        let _tempPos = new Vector3(0, 0, 0);
        _camera.convertScreenCoordToOrthographicCoord(new Vector3(220, 900, 0), _tempPos);
        sp3.transform.position = _tempPos;
        if (isRole)
          sp3.transform.localScale = new Vector3(3, 3, 3);
        else
          sp3.transform.localScale = new Vector3(1, 1, 1);
        _camera.renderTarget = new Laya.RenderTexture(256, 256, Laya.RenderTargetFormat.R8G8B8A8, Laya.RenderTargetFormat.DEPTHSTENCIL_24_8);
        sp.texture = new Laya.Texture(_camera.renderTarget);
        isRole && (this.sp3Role = sp3);
        if (isRole) {
          this._animator = sp3.getChildAt(0).getComponent(Laya.Animator);
          Laya.stage.on(Laya.Event.KEY_UP, this, () => {
            this.switchAni("Idle");
          });
        }
      });
    }
    onUpdate() {
      if (this.spTrail.x < 20 && this.turnLeft)
        this.turnLeft = false;
      else if (this.spTrail.x > Laya.stage.width - 200 && !this.turnLeft)
        this.turnLeft = true;
      if (this.turnLeft)
        this.spTrail.x -= 1;
      else
        this.spTrail.x += 1;
      if (KeyBoardManager.hasKeyDown(Keyboard2.W)) {
        this.spRole.y -= 3;
        this.rotateRole(this.rotationW);
      } else if (KeyBoardManager.hasKeyDown(Keyboard2.S)) {
        this.spRole.y += 3;
        this.rotateRole(this.rotationS);
      } else if (KeyBoardManager.hasKeyDown(Keyboard2.A)) {
        this.spRole.x -= 3;
        this.rotateRole(this.rotationA);
      } else if (KeyBoardManager.hasKeyDown(Keyboard2.D)) {
        this.spRole.x += 3;
        this.rotateRole(this.rotationD);
      }
    }
    /** 改变角色的朝向 
     * @param r Vector3旋转值
     */
    rotateRole(r) {
      this.switchAni("Run");
      if (r === this._rotation)
        return;
      this.sp3Role.transform.rotationEuler = r;
      this._rotation = r;
    }
    switchAni(aniType) {
      if (aniType == "Run") {
        if (aniType !== this.lastRunAniName) {
          this._animator.play(aniType);
        }
      } else {
        this._animator.play(aniType);
      }
      this.lastRunAniName = aniType;
    }
    onDisable() {
      Laya.stage.useRetinalCanvas = true;
      Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
      Laya.stage.width = 1334;
      Laya.stage.height = 750;
      Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
      this.scene3D.destroy();
    }
  };
  __name(D3Main, "D3Main");
  __decorateClass([
    property8({ type: Laya.Scene3D, caption: "3D场景根节点" })
  ], D3Main.prototype, "scene3D", 2);
  __decorateClass([
    property8({ type: Laya.Sprite, caption: "拖尾节点", tips: "拖拽拖尾的节点绑定到组件属性上" })
  ], D3Main.prototype, "spTrail", 2);
  D3Main = __decorateClass([
    regClass10("41ed26b5-2273-4bb9-aa52-9b34b141c8c5", "../src/scence/d3Demo/D3Main.ts")
  ], D3Main);

  // src/scence/uiDemo/DialogRT.generated.ts
  var _DialogRTBase = class _DialogRTBase extends Laya.Dialog {
  };
  __name(_DialogRTBase, "DialogRTBase");
  var DialogRTBase = _DialogRTBase;

  // src/scence/uiDemo/DialogRT.ts
  var { regClass: regClass11, property: property9 } = Laya;
  var DialogRT = class extends DialogRTBase {
    constructor() {
      super();
    }
    onAwake() {
      this.dialogTitle.text = "弹窗的标题";
      this.dialogText.text = "弹窗的具体文本……";
      this.closeBtn.on(Laya.Event.CLICK, this, () => {
        this.close();
      });
    }
    onDisable() {
    }
  };
  __name(DialogRT, "DialogRT");
  DialogRT = __decorateClass([
    regClass11("602c94e7-a923-481c-8c58-fe4b599761c0", "../src/scence/uiDemo/DialogRT.ts")
  ], DialogRT);

  // src/scence/uiDemo/MsgRT.generated.ts
  var _MsgRTBase = class _MsgRTBase extends Laya.Scene {
  };
  __name(_MsgRTBase, "MsgRTBase");
  var MsgRTBase = _MsgRTBase;

  // src/scence/uiDemo/MsgRT.ts
  var { regClass: regClass12, property: property10 } = Laya;
  var MsgRT = class extends MsgRTBase {
    constructor() {
      super();
    }
    onOpened(param) {
      if (param) {
        this.msgLab.x = param.point && param.point.x ? param.point.x : Laya.stage.mouseX - 50;
        this.msgLab.y = param.point && param.point.y ? param.point.y : Laya.stage.mouseY - 80;
        this.msgLab.text = param.text;
        Laya.Tween.to(this.msgLab, { y: this.msgLab.y - 100, alpha: 0 }, 1e3, Laya.Ease.linearNone);
      }
    }
  };
  __name(MsgRT, "MsgRT");
  MsgRT = __decorateClass([
    regClass12("f6418ece-96db-48e5-9202-637497d56d7d", "../src/scence/uiDemo/MsgRT.ts")
  ], MsgRT);

  // src/scence/uiDemo/page/IframeElementRT.generated.ts
  var _IframeElementRTBase = class _IframeElementRTBase extends Laya.Box {
  };
  __name(_IframeElementRTBase, "IframeElementRTBase");
  var IframeElementRTBase = _IframeElementRTBase;

  // src/scence/uiDemo/page/IframeElementRT.ts
  var { regClass: regClass13 } = Laya;
  var Browser = Laya.Browser;
  var Render = Laya.Render;
  var SpriteUtils = Laya.SpriteUtils;
  var IframeElementRT = class extends IframeElementRTBase {
    constructor() {
      super();
      IframeElementRT.instance = this;
    }
    onEnable() {
      if (!Browser.onChrome && !Browser.onEdge && !Browser.onFirefox && !Browser.onSafari)
        this.videoBtn.label = "DOM元素只能在浏览器上打开";
      else
        this.videoBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
          this.createElementVideo();
        });
    }
    /** 创建视频 */
    createElementVideo() {
      Browser.window.IframeElementRT = this;
      this.createScript();
      this.createDiv();
      this.createIframe("resources/files/video.html?url=layaAir.mp4");
      this.setDOMElementInArea();
      Laya.stage.on(Laya.Event.RESIZE, this, this.setDOMElementInArea);
    }
    /** 设置DOM节点区域，与引擎上的节点位置对应起来 */
    setDOMElementInArea() {
      if (this.iframeElement != null && this.divElement != null) {
        SpriteUtils.fitDOMElementInArea(this.divElement, this.closeBox, 0, 0, this.closeBox.width, this.closeBox.height);
        SpriteUtils.fitDOMElementInArea(this.iframeElement, this.iframeBox, 0, 0, this.iframeBox.width, this.iframeBox.height);
      }
    }
    /** 创建script元素与内容 */
    createScript() {
      this.scriptElement = Browser.document.createElement("script");
      Browser.document.body.appendChild(this.scriptElement);
      this.scriptElement.innerHTML = "function closeVideo(){IframeElementRT.closeVideo() }";
    }
    /** 创建iframe相关的DOM元素与属性 */
    createIframe(url) {
      this.iframeElement = Browser.createElement("iframe");
      Browser.document.body.appendChild(this.iframeElement);
      this.iframeElement.style.zIndex = Render.canvas.style.zIndex + 998;
      this.iframeElement.src = url;
      this.iframeElement.style.margin = "0";
      this.iframeElement.style.scrolling = "no";
      this.iframeElement.style.frameborder = "0";
      this.iframeElement.style.padding = "0";
      this.iframeElement.style.left = "0";
      this.iframeElement.style.top = "0px";
      this.iframeElement.style.position = "absolute";
    }
    /** 创建div元素
     *  由于dom元素不能穿插到引擎节点里，只能在最上层显示，如果想在视频上面与引擎交互，要采用原生的dom元素去调
     */
    createDiv() {
      this.divElement = Laya.Browser.createElement("div");
      Laya.Browser.document.body.appendChild(this.divElement);
      this.divElement.innerHTML = "<img src='resources/files/x.png' width='60px' height='60px' onclick='closeVideo()'/>";
      this.divElement.style.zIndex = Render.canvas.style.zIndex + 999;
    }
    /**关掉视频 */
    closeVideo() {
      Laya.Browser.document.body.removeChild(this.scriptElement);
      Laya.Browser.document.body.removeChild(this.iframeElement);
      Laya.Browser.document.body.removeChild(this.divElement);
      this.scriptElement = this.iframeElement = this.divElement = null;
      Laya.stage.off(Laya.Event.RESIZE, this, this.setDOMElementInArea);
    }
  };
  __name(IframeElementRT, "IframeElementRT");
  IframeElementRT = __decorateClass([
    regClass13("66d331a0-91d0-4d68-a98c-65b2195e758d", "../src/scence/uiDemo/page/IframeElementRT.ts")
  ], IframeElementRT);

  // src/scence/uiDemo/UiMainRT.generated.ts
  var _UiMainRTBase = class _UiMainRTBase extends Laya.Scene {
  };
  __name(_UiMainRTBase, "UiMainRTBase");
  var UiMainRTBase = _UiMainRTBase;

  // src/scence/uiDemo/UiMainRT.ts
  var { regClass: regClass14 } = Laya;
  var UiMainRT = class extends UiMainRTBase {
    constructor() {
      super();
    }
    onEnable() {
      Laya.Physics2D.I && (Laya.Physics2D.I.enableDebugDraw = false);
      this.tabBindViewStack();
      this.topTab.selectedIndex = 0;
      this.item0Tab.selectedIndex = 0;
    }
    /**侦听某些点击事件  */
    onClicked() {
      let openSceneBtn = this.item2Tab.getChildByName("item2"), openSceneBtn2 = this.item2Tab.getChildByName("item3"), openDialogBtn = this.item2Tab.getChildByName("item4");
      openSceneBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
        Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls", false);
      });
      openSceneBtn2.on(Laya.Event.MOUSE_DOWN, this, () => {
        Laya.Scene.open("scenes/uiDemo/page/OpenScene.ls", false);
      });
      openDialogBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
        Laya.Scene.open("scenes/uiDemo/page/Dialog.ls", false, { "title": "弹窗的标题", "text": "弹窗的具体文本……" });
      });
    }
    /**关联tab与ViewStack的索引关系*/
    tabBindViewStack() {
      this.topTab.selectHandler = new Laya.Handler(this, (index) => {
        this.tabPage.selectedIndex = index;
        if (index == 1)
          this.item1Tab.selectedIndex = 0;
        if (index == 2)
          this.item2Tab.selectedIndex = 0;
        if (index == 3)
          this.item3Tab.selectedIndex = 0;
        if (index == 4)
          this.item4Tab.selectedIndex = 0;
        Laya.Physics2D.I && (Laya.Physics2D.I.enableDebugDraw = false);
        !!IframeElementRT.instance.iframeElement && IframeElementRT.instance.closeVideo();
        index == 2 && this.item2Page.selectedIndex == 1 && !IframeElementRT.instance.iframeElement && IframeElementRT.instance.createElementVideo();
      });
      this.item0Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item0Page.selectedIndex = index;
      });
      this.item1Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item1Page.selectedIndex = index;
        if (index !== 4 && Laya.Physics2D.I)
          Laya.Physics2D.I.enableDebugDraw = false;
        else if (index == 4 && Laya.Physics2D.I)
          Laya.Physics2D.I.enableDebugDraw = true;
      });
      this.item2Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item2Page.selectedIndex = index;
        switch (index) {
          case 1:
            !IframeElementRT.instance.iframeElement && IframeElementRT.instance.createElementVideo();
            break;
          case 2:
            Laya.Scene.open("scenes/uiDemo/page/OpenMainScene.ls", false);
            break;
          case 3:
            Laya.loader.load("prefab/uiDemo/page/Win.lh").then((res) => {
              let win = res.create();
              this.tabPage.parent.addChild(win);
            });
            break;
          case 4:
            Laya.loader.load("prefab/uiDemo/page/Dialog.lh").then((res) => {
              let dlg = res.create();
              dlg.show();
            });
            break;
        }
        index !== 1 && !!IframeElementRT.instance.iframeElement && IframeElementRT.instance.closeVideo();
      });
      this.item3Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item3Page.selectedIndex = index;
      });
      this.item4Tab.selectHandler = new Laya.Handler(this, (index) => {
        this.item4Page.selectedIndex = index;
      });
    }
    onDisable() {
    }
  };
  __name(UiMainRT, "UiMainRT");
  UiMainRT = __decorateClass([
    regClass14("81b00a18-b16d-4395-8beb-e36956870010", "../src/scence/uiDemo/UiMainRT.ts")
  ], UiMainRT);

  // src/scence/uiDemo/animation/AtlasAniRT.generated.ts
  var _AtlasAniRTBase = class _AtlasAniRTBase extends Laya.Box {
  };
  __name(_AtlasAniRTBase, "AtlasAniRTBase");
  var AtlasAniRTBase = _AtlasAniRTBase;

  // src/scence/uiDemo/animation/AtlasAniRT.ts
  var { regClass: regClass15 } = Laya;
  var AtlasAniRT = class extends AtlasAniRTBase {
    constructor() {
      super(...arguments);
      /** 是否播放的开关，true为播放 */
      this.isPlay = false;
    }
    onAwake() {
      console.log("创建动画模板");
      this.createAniTemplate("moveB");
      this.createAniTemplate("moveC");
      this.createAniTemplate("moveE");
      this.createAniTemplate("moveF");
      this.createAniTemplate("moveH");
      this.createAniTemplate("moveI");
      this.createAniTemplate("moveK");
      this.createAniTemplate("moveL");
      this.aniSource.play(0, true, "moveB");
    }
    onEnable() {
      this.playAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = true;
        this.aniSource.play(0, true, this.selectAni.selectedLabel);
      });
      this.stopAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = false;
        this.aniSource.isPlaying && this.aniSource.stop();
      });
      this.selectAni.selectHandler = new Laya.Handler(this, () => {
        this.isPlay ? this.aniSource.play(0, true, this.selectAni.selectedLabel) : this.aniSource.play(0, false, this.selectAni.selectedLabel);
      });
    }
    /** 创建动画模板
     * @param name 动画的资源模板名称
     * @param len 动画关键帧的长度，有多少资源，就创建多少个动画关键帧
     */
    createAniTemplate(name, len = 8) {
      let aniFrames = [];
      for (let i = 0; i < len; i++) {
        aniFrames.push("resources/UI/role/atlasAni/139x/" + name + i + ".png");
      }
      Laya.Animation.createFrames(aniFrames, name);
    }
  };
  __name(AtlasAniRT, "AtlasAniRT");
  AtlasAniRT = __decorateClass([
    regClass15("b6691494-c820-422d-b415-9a72ea70b56b", "../src/scence/uiDemo/animation/AtlasAniRT.ts")
  ], AtlasAniRT);

  // src/scence/uiDemo/animation/FrameAniRT.generated.ts
  var _FrameAniRTBase = class _FrameAniRTBase extends Laya.Box {
  };
  __name(_FrameAniRTBase, "FrameAniRTBase");
  var FrameAniRTBase = _FrameAniRTBase;

  // src/scence/uiDemo/animation/FrameAniRT.ts
  var { regClass: regClass16 } = Laya;
  var FrameAniRT = class extends FrameAniRTBase {
    constructor() {
      super(...arguments);
      /** 是否播放的开关，true为播放 */
      this.isPlay = false;
    }
    onEnable() {
      this.isPlay = true;
      this.playAnimation(this.selectAni.selectedLabel);
      this.playAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = true;
        this.playAnimation(this.selectAni.selectedLabel);
      });
      this.stopAni.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.isPlay = false;
        this.aniSource.isPlaying && this.aniSource.stop();
      });
      this.selectAni.selectHandler = new Laya.Handler(this, () => {
        this.isPlay ? this.playAnimation(this.selectAni.selectedLabel) : this.playAnimation(this.selectAni.selectedLabel, false);
      });
    }
    /** 直接播放动画
     * @param name 动画的资源模板名称
     * @param loop 是否循环播放
     * @param len 动画关键帧的长度，有多少资源，就创建多少个动画关键帧
     */
    playAnimation(name, loop = true, len = 7) {
      let aniFrames = [];
      for (let i = 0; i < len; i++) {
        aniFrames.push("resources/UI/role/frameAni/" + name + i + ".png");
      }
      this.aniSource.loadImages(aniFrames).play(0, loop);
    }
  };
  __name(FrameAniRT, "FrameAniRT");
  FrameAniRT = __decorateClass([
    regClass16("f20c3b15-2e22-4f5a-bc12-174ddec5a495", "../src/scence/uiDemo/animation/FrameAniRT.ts")
  ], FrameAniRT);

  // src/scence/uiDemo/animation/SkeletonAni.ts
  var { regClass: regClass17, property: property11 } = Laya;
  var SkeletonAni = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** 动画皮肤名称 */
      this.skinArray = ["goblin", "goblingirl"];
      /** 动画皮肤索引 */
      this.skinIndex = 0;
      /** spine 动画索引 */
      this.spineAniIndex = 6;
    }
    onEnable() {
      this.createLayaSpine();
      this.playSpine();
    }
    /**创建layaAir引擎内置的spine动画 */
    createLayaSpine() {
      this.skeletonNode = this.owner.getChildByName("skeletonNode");
      Laya.loader.load("resources/UI/role/spineAni/goblins.sk").then((templet) => {
        this.skeletonAni = templet.buildArmature(1);
        this.skeletonNode.addChild(this.skeletonAni);
        this.skeletonAni.x = 128;
        this.skeletonAni.y = 390;
        this.skeletonAni.play(0, true);
        this.changeSkin();
        this.skeletonNode.on(Laya.Event.CLICK, this, this.changeSkin);
      });
    }
    /** 改变引擎内置的骨骼动画皮肤 */
    changeSkin() {
      this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]);
      this.skinIndex = (this.skinIndex + 1) % this.skinArray.length;
    }
    /**播放spine运行库动画 */
    playSpine() {
      this.spineAni = this.spineNode.getComponent(Laya.Spine2DRenderNode);
      this.spineAniNum = this.spineAni.getAnimNum();
      this.spineAni.play(this.spineAniIndex, true);
      this.spineBtn.on(Laya.Event.CLICK, this, this.changeAni);
    }
    /** 更换Spine动作 */
    changeAni() {
      ++this.spineAniIndex >= this.spineAniNum && (this.spineAniIndex = 5);
      this.spineAni.play(this.spineAniIndex, true, true);
    }
  };
  __name(SkeletonAni, "SkeletonAni");
  __decorateClass([
    property11(Laya.Sprite)
  ], SkeletonAni.prototype, "spineNode", 2);
  __decorateClass([
    property11(Laya.Button)
  ], SkeletonAni.prototype, "spineBtn", 2);
  SkeletonAni = __decorateClass([
    regClass17("a93776c6-6457-4f88-b445-ef78aa5cb42e", "../src/scence/uiDemo/animation/SkeletonAni.ts")
  ], SkeletonAni);

  // src/scence/uiDemo/interactive/AStar.ts
  var { regClass: regClass18, property: property12 } = Laya;
  var Event2 = Laya.Event;
  var Point = Laya.Point;
  var AStar = class extends Laya.Script {
    constructor() {
      super();
      this.runAniName = "runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";
      this.standAniName = "right,Rdown,down,Ldown,left,Lup,up,Rup";
      /** 记录stage上的鼠标点，当频繁使用stage坐标转化时，可以减少实例开销 */
      this.stageMouse = new Point();
      /** 摇杆角度 */
      this.angle = 0;
      /** 是否允许跑动 */
      this.isMoving = false;
      this.isRun = false;
    }
    onEnable() {
      this.createMap();
      this.sceneWindow.on(Event2.MOUSE_UP, this, this.mouseUp);
      this.roleAniNode = this.roleAni.create();
      this.sceneWindow.addChild(this.roleAniNode);
      this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2 + 26);
      this.roleAniNode.scale(0.6, 0.6);
      this.roleAniNode.x = this.lastX = 48;
      this.roleAniNode.y = this.lastY = 48;
      this._animator = this.roleAniNode.getComponent(Laya.Animator2D);
      let aniState = this._animator.getDefaultState();
      console.log(aniState.name);
      this.createWallMap();
    }
    createWallMap() {
      Laya.loader.load("resources/tiledMap/desert_new.json").then(() => {
        let _json = Laya.loader.getRes("resources/tiledMap/desert_new.json").data;
        let data = _json.layers[0].data;
        let mapData;
        mapData = new Array();
        for (var i = 0; i < 40; i++) {
          mapData[i] = new Array();
          for (var j = 0; j < 60; j++) {
            if (data[i * 60 + j] == 30)
              mapData[i][j] = 1;
            else
              mapData[i][j] = 0;
          }
        }
        this.graph = new window.Graph(mapData);
        this.opts = [];
        this.opts.closest = true;
        this.opts.heuristic = window.astar.heuristics.diagonal;
      });
    }
    mouseUp(e) {
      if (this.isMoving)
        return;
      this.stageMouse.x = Laya.stage.mouseX;
      this.stageMouse.y = Laya.stage.mouseY;
      let mapMouse = this.gameMap.globalToLocal(this.stageMouse);
      var start = this.graph.grid[Math.ceil(this.roleAniNode.y / 32) - 1][Math.ceil(this.roleAniNode.x / 32) - 1];
      var end = this.graph.grid[Math.ceil(mapMouse.y / 32) - 1][Math.ceil(mapMouse.x / 32) - 1];
      this._everyPath = window.astar.search(this.graph, start, end, {
        closest: this.opts.closest
      });
      if (this._everyPath.length > 0) {
        this.isMoving = true;
      }
      Laya.timer.loop(100, this, this.loopfun);
    }
    loopfun() {
      if (this._everyPath.length > 0) {
        let x = this._everyPath[0].y * 32 + 16;
        let y = this._everyPath[0].x * 32 + 16;
        if (x == this.lastX) {
          if (y > this.lastY)
            this.angle = 90;
          else
            this.angle = 270;
        } else {
          if (x > this.lastX)
            this.angle = 0;
          else
            this.angle = 180;
        }
        this.switchAni("run");
        this.lastX = x;
        this.lastY = y;
        Laya.Tween.to(this.roleAniNode, { x, y }, 100);
        this._everyPath.splice(0, 1);
      } else {
        this.switchAni("stand");
        Laya.timer.clear(this, this.loopfun);
        this.isMoving = false;
      }
    }
    //创建地图
    createMap() {
      this.tiledMap = new Laya.TiledMap();
      this.tiledMap.createMap("resources/tiledMap/desert_new.json", new Laya.Rectangle(0, 0, this.sceneWindow.width, this.sceneWindow.height), new Laya.Handler(this, this.completeHandler));
    }
    onLoaded() {
      this.tiledMap.mapSprite().removeSelf();
      this.gameMap.addChild(this.tiledMap.mapSprite());
    }
    /**
     * 地图加载完成的回调
     */
    completeHandler(e = null) {
      this.onLoaded();
    }
    /** 切换动画
     * @param aniType 动作类型
     */
    switchAni(aniType) {
      if (aniType == "run") {
        let runS = this.getOrientation(this.angle, this.runAniName);
        this._animator.play(runS);
        this.isRun = true;
      } else {
        this.isRun = false;
        let standS = this.getOrientation(this.angle, this.standAniName);
        this.lastAngle !== this.angle && this._animator.play(standS);
      }
    }
    /** 根据角度得到朝向动画名 
     * @param angle 角度
     * @param aniName 动画名称字符串
     * @return 动画名
    */
    getOrientation(angle, aniName) {
      let aniArr = aniName.split(",");
      const angleConditions = 360 / aniArr.length;
      return aniArr[Math.floor(angle / angleConditions)];
    }
    onDisable() {
      Laya.stage.off(Event2.MOUSE_UP, this, this.mouseUp);
      if (this.tiledMap) {
        this.tiledMap.destroy();
      }
    }
  };
  __name(AStar, "AStar");
  __decorateClass([
    property12({ type: Laya.Sprite })
  ], AStar.prototype, "gameMap", 2);
  __decorateClass([
    property12({ type: Laya.Prefab })
  ], AStar.prototype, "roleAni", 2);
  __decorateClass([
    property12({ type: "string" })
  ], AStar.prototype, "runAniName", 2);
  __decorateClass([
    property12({ type: "string" })
  ], AStar.prototype, "standAniName", 2);
  __decorateClass([
    property12({ type: Laya.Panel })
  ], AStar.prototype, "sceneWindow", 2);
  AStar = __decorateClass([
    regClass18("cc16f94c-6cbb-4b0b-b9fc-6a45886cd49e", "../src/scence/uiDemo/interactive/AStar.ts")
  ], AStar);

  // src/scence/uiDemo/interactive/ShapeDetection.ts
  var { regClass: regClass19, property: property13 } = Laya;
  var Rectangle = Laya.Rectangle;
  var ShapeDetection = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** 创建一个碰撞节点的矩形区对象，用于检测复用，可节省频繁检测的实例开销 */
      this._rect1 = Rectangle.TEMP;
      /** 创建一个碰撞目标节点的矩形区对象，用于检测复用，可节省频繁检测的实例开销 */
      this._rect2 = Rectangle.TEMP;
    }
    /** 矩形检测 
     * @param self 本对象
     * @param target 目标对象
     * @returns boolean：true碰到，flase未碰到
    */
    rectDetection(self, target) {
      return !//以下有一个条件成立就是未碰到，全都不成立就是碰上了
      (self.x > target.x + target.width || self.x + self.width < target.x || self.y > target.y + target.height || self.y + self.height < target.y);
    }
    /** 碰撞检测 
     * @param self 控制的碰撞发起对象
     * @param targets 被碰撞的目标对象
     * @param type 碰撞检测类型0：圆形检测，1：矩形检测，2：多边形检测 
     * @returns collisionNodes：被撞的节点对象
    */
    collisionWith(self, targets, type) {
      let collisionNodes = [];
      if (type == 0) {
        var p1 = Laya.Point.create(), p1PivotX = self.width / 2, p1PivotY = self.height / 2, p2 = Laya.Point.create(), p1Radius, p2Radius;
        p1.x = self.x + p1PivotX;
        p1.y = self.y + p1PivotY;
        p1Radius = this.rectToRadius(self.width, self.height);
      } else if (type == 2) {
        var targetVertices, selfVertices;
        selfVertices = this.arrayToPoint(self);
      }
      for (let i = 0; i < targets.length; i++) {
        if (self == targets[i])
          continue;
        switch (type) {
          case 0:
            p2.x = targets[i].x + targets[i].width / 2;
            p2.y = targets[i].y + targets[i].height / 2;
            p2Radius = this.rectToRadius(targets[i].width, targets[i].height);
            this.circleDetection(p1, p2, p1Radius + p2Radius) && collisionNodes.push(targets[i]);
            break;
          case 1:
            this.rectDetection(self, targets[i]) && collisionNodes.push(targets[i]);
            break;
          case 2:
            if (self.name === "c1") {
              targetVertices = this.arrayToPoint(targets[i]);
              this.circleAndPolygonDetection(self, targetVertices, targets[i]) && collisionNodes.push(targets[i]);
            } else if (targets[i].name === "c1") {
              this.circleAndPolygonDetection(targets[i], selfVertices, self) && collisionNodes.push(targets[i]);
            } else {
              targetVertices = this.arrayToPoint(targets[i]);
              this.polygonDetection(selfVertices, targetVertices, self, targets[i]) && collisionNodes.push(targets[i]);
            }
            break;
        }
      }
      return collisionNodes;
    }
    /**
     * 圆和多边形的碰撞检测
     * @param circel 圆形碰撞方的节点对象
     * @param polygonVertices 多边形碰撞方的全部顶点坐标
     * @param polygonNode 多边形节点对象
     * @returns 
     */
    circleAndPolygonDetection(circel, polygonVertices, polygonNode) {
      let sides = this.getSides(polygonVertices), axises = [], circelCenter = Laya.Point.create(), nearestPoint = Laya.Point.create(), radius = circel.hitArea._hit._cmds[0].radius, targetList = this.getNodeCoord(polygonVertices, polygonNode);
      circelCenter.x = circel.x + circel.hitArea._hit._cmds[0].x;
      circelCenter.y = circel.y + circel.hitArea._hit._cmds[0].y;
      nearestPoint = this.getNearestPoint(circelCenter, targetList);
      axises.push(new Laya.Point(nearestPoint.x - circelCenter.x, nearestPoint.y - circelCenter.y));
      for (let i = 0, len = sides.length; i < len; i++)
        axises.push(this.perpendicular(sides[i]));
      for (let i = 0, len = axises.length; i < len; i++) {
        let axis = axises[i], s = this.getCircleProjection(circelCenter, axis, radius), t = this.getPolygonProjection(targetList, axis);
        if (!this.isOverlap(s, t))
          return false;
      }
      return true;
    }
    /**
     * 获得离圆最近的多边形顶点坐标
     * @param circelCenter 圆心坐标 
     * @param list 多边形所有顶点的节点位置坐标
     * @returns nearestPoint 最近的点
     */
    getNearestPoint(circelCenter, list) {
      let nearestPoint = list[0], minDistance = this.getDistance(circelCenter, nearestPoint), nowPoint, nowDistance;
      for (let i = 1; i < list.length; i++) {
        nowPoint = list[i];
        nowDistance = this.getDistance(circelCenter, nowPoint);
        if (nowDistance < minDistance) {
          minDistance = nowDistance;
          nearestPoint = nowPoint;
        }
      }
      return nearestPoint;
    }
    /** 多边形碰撞检测
     * @param selfVertices 碰撞方的顶点坐标
     * @param targetVertices 被撞方的顶点坐标
     */
    polygonDetection(selfVertices, targetVertices, selfNode, targetNode) {
      let sides = this.getSides(selfVertices).concat(this.getSides(targetVertices)), axises = [], selfList = this.getNodeCoord(selfVertices, selfNode), targetList = this.getNodeCoord(targetVertices, targetNode);
      for (let i = 0, len = sides.length; i < len; i++)
        axises.push(this.perpendicular(sides[i]));
      for (let i = 0, len = axises.length; i < len; i++) {
        let axis = axises[i], s = this.getPolygonProjection(selfList, axis), t = this.getPolygonProjection(targetList, axis);
        if (!this.isOverlap(s, t))
          return false;
      }
      return true;
    }
    /** 判断投影集合是否存在交集，也就是发生投影重叠 
     * @param self 碰撞方的投影集合
     * @param target 碰撞目标的投影集合
    */
    isOverlap(self, target) {
      let min, max;
      min = self.min < target.min ? self.min : target.min;
      max = self.max > target.max ? self.max : target.max;
      return self.max - self.min + (target.max - target.min) >= max - min;
    }
    /** 取得多边形各个顶点的节点位置坐标 */
    getNodeCoord(vertices, node) {
      let _arr = [];
      for (let i = 0; i < vertices.length; i++) {
        let _point = Laya.Point.create();
        _point.x = vertices[i].x + node.x + node.hitArea._hit._cmds[0].x;
        _point.y = vertices[i].y + node.y + node.hitArea._hit._cmds[0].y;
        _arr.push(_point);
      }
      return _arr;
    }
    /** 获得多边形的最大与最小投影点
     * @param list 多边形顶点坐标 
     * @param axis 边的法线
    */
    getPolygonProjection(list, axis) {
      let min = null, max = null;
      for (let i = 0; i < list.length; i++) {
        let projection = this.dotProduct(list[i], axis) / this.getLength(axis);
        (min === null || projection < min) && (min = projection);
        (max === null || projection > max) && (max = projection);
      }
      return { min, max };
    }
    /** 获得圆形的最大与最小投影点 
     * @param circelCenter 圆心坐标
     * @param axis 边的法线
     * @param circleRadius 圆的半径
    */
    getCircleProjection(circelCenter, axis, circleRadius) {
      let projection = this.dotProduct(circelCenter, axis) / this.getLength(axis);
      return { min: projection - circleRadius, max: projection + circleRadius };
    }
    /** 已知矩形边，求相切的同心圆半径 
     *  @param width 矩形宽
     *  @param height 矩形高
     *  @return 半径长度
     * */
    rectToRadius(width, height) {
      let radius;
      if (width == height) {
        radius = width / 2;
      } else {
        radius = Math.sqrt(width * width + height * height) / 2;
      }
      return radius;
    }
    /** 圆形碰撞检测 
     * @param p1 本对象圆心坐标
     * @param p2 目标对象圆心坐标
     * @param distance 碰撞距离（两个半径和）
     * @returns boolean true:发生碰撞，false:未碰撞
    */
    circleDetection(p1, p2, distance) {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)) <= distance;
    }
    /** 圆形碰撞检测（分离轴） 
     * @param p1 碰撞方的圆心坐标
     * @param p2 被撞方的圆心坐标
     * @param p1Radius 碰撞方的半径
     * @param p2Radius 被撞方的半径
    */
    circlesCollision(p1, p2, p1Radius, p2Radius) {
      let axis = this.subtract(p1, p2), s = this.getCircleProjection(p1, axis, p1Radius), t = this.getCircleProjection(p2, axis, p2Radius);
      if (this.isOverlap(s, t))
        return true;
      return false;
    }
    /** 
     * 把一维数组转换为二维坐标数组
     * @param sp 节点对象
     */
    arrayToPoint(sp) {
      let points = [], hitPoints = [];
      hitPoints = sp.hitArea._hit._cmds[0].points;
      if (hitPoints && hitPoints.length > 3) {
        for (let i = 0; i < hitPoints.length / 2; i++) {
          points[i] = Laya.Point.create();
          points[i].x = hitPoints[i * 2];
          points[i].y = hitPoints[i * 2 + 1];
        }
      }
      return points;
    }
    /** 
     * 边的法线
     */
    perpendicular(p) {
      let _temp = Laya.Point.create();
      _temp.x = p.y;
      _temp.y = -p.x;
      return _temp;
    }
    /** 获得法向量 
     * @param p 坐标点
    */
    getNormal(p) {
      let sum = Math.sqrt(p.x * p.x + p.y * p.y);
      return new Laya.Point(p.y / sum, (0 - p.x) / sum);
    }
    /** 获得多边形的边（向量坐标） 
     * @param vertices 顶点坐标数组
     * @returns Array<any> 边坐标数组
    */
    getSides(vertices) {
      var list = vertices, length = list.length, sides = new Array();
      if (length >= 3) {
        for (var i = 1, lastPoint = list[0]; i < length; i++) {
          let nowPoint = list[i];
          sides.push(this.subtract(nowPoint, lastPoint));
          lastPoint = nowPoint;
        }
        sides.push(this.subtract(list[0], list[length - 1]));
      }
      return sides;
    }
    /**
     * 获得坐标的长度，把二维坐标点转换为一维长度
     * @param p 坐标点
     */
    getLength(p) {
      return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /**
     * 点乘运算，把向量降维成标量
     * @param p1 坐标点
     * @param p2 坐标点
     */
    dotProduct(p1, p2) {
      return p1.x * p2.x + p1.y * p2.y;
    }
    /** 坐标相减
     * @param p2 当前坐标
     * @param p1 上一个坐标
     */
    subtract(p2, p1) {
      let _point = Laya.Point.create();
      return _point.setTo(p2.x - p1.x, p2.y - p1.y);
    }
    /** 已知两个坐标点，求两者的距离长度 
     * @param p1 坐标点
     * @param p2 坐标点
    */
    getDistance(p1, p2) {
      let dx = p1.x - p2.x, dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  };
  __name(ShapeDetection, "ShapeDetection");
  ShapeDetection = __decorateClass([
    regClass19("9da23b19-add9-433b-b01f-16576e269913", "../src/scence/uiDemo/interactive/ShapeDetection.ts")
  ], ShapeDetection);

  // src/scence/uiDemo/interactive/ShapeDetectionRT.generated.ts
  var _ShapeDetectionRTBase = class _ShapeDetectionRTBase extends Laya.View {
  };
  __name(_ShapeDetectionRTBase, "ShapeDetectionRTBase");
  var ShapeDetectionRTBase = _ShapeDetectionRTBase;

  // src/scence/uiDemo/interactive/ShapeDetectionRT.ts
  var { regClass: regClass20, property: property14 } = Laya;
  var ShapeDetectionRT = class extends ShapeDetectionRTBase {
    constructor() {
      super();
      /** 检测类型 */
      this._detectionType = 0;
      /** 需要碰撞的节点 */
      this.collisionNodes = null;
      ShapeDetectionRT.i = this;
    }
    onEnable() {
      this.collisionNodes = [this.c1, this.p1, this.p2];
      this._script = this.getComponent(ShapeDetection);
      this.detectionType.selectHandler = new Laya.Handler(this, this.onSelected);
      this.detectionType.selectedIndex = 0;
    }
    /** 当选中某个选项时 */
    onSelected(index) {
      console.log("onSelected:" + index);
      this._detectionType = index;
      switch (index) {
        case 0:
          this.setCircleLine([this.c11, this.p11, this.p22]);
          break;
        case 1:
          this.setRectLine([this.c11, this.p11, this.p22]);
          break;
        case 2:
          this.c11.graphics.clear();
          this.p11.graphics.clear();
          this.p22.graphics.clear();
          break;
      }
    }
    /** 碰撞检测 
     * @param self 发起碰撞的对象
    */
    collisionWith(self) {
      let nodes;
      nodes = this._script.collisionWith(self, this.collisionNodes, this._detectionType);
      if (nodes.length > 0) {
        nodes.push(self);
        this.setLineWidth(nodes);
      } else {
        this.retsetLineWidth();
      }
    }
    /** 设置边框宽度 
     * @param nodes 节点对象数组
     */
    setLineWidth(nodes) {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i]._graphics._cmds[0].lineWidth = 3;
      }
    }
    /** 重置边框宽度 */
    retsetLineWidth() {
      for (let i = 0; i < this.collisionNodes.length; i++) {
        this.collisionNodes[i]._graphics._cmds[0].lineWidth = 0;
      }
    }
    /** 设置圆形边线 
     * @param nodes 节点对象数组
     * @param lineWidth 线框宽度
     * @param lineColor 线的颜色
    */
    setCircleLine(nodes, lineWidth = 1, lineColor = "#1e00fb") {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].graphics.clear();
        let x = nodes[i].width / 2, y = nodes[i].height / 2, radius = this._script.rectToRadius(nodes[i].width, nodes[i].height);
        nodes[i].graphics.drawCircle(x, y, radius, null, lineColor, lineWidth);
      }
    }
    /** 设置矩形边线 
     * @param nodes 节点对象数组
     * @param lineWidth 线框宽度
     * @param lineColor 线的颜色
    */
    setRectLine(nodes, lineWidth = 1, lineColor = "#1e00fb") {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].graphics.clear();
        nodes[i].graphics.drawRect(nodes[i].x, nodes[i].y, nodes[i].width, nodes[i].height, null, lineColor, lineWidth);
      }
    }
  };
  __name(ShapeDetectionRT, "ShapeDetectionRT");
  ShapeDetectionRT = __decorateClass([
    regClass20("46b18764-7fd2-44e0-ab17-95f115ad39b2", "../src/scence/uiDemo/interactive/ShapeDetectionRT.ts")
  ], ShapeDetectionRT);

  // src/scence/uiDemo/interactive/TileMap.ts
  var { regClass: regClass21, property: property15 } = Laya;
  var Event3 = Laya.Event;
  var Point2 = Laya.Point;
  var TileMap = class extends Laya.Script {
    constructor() {
      super();
      this.runAniName = "runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";
      this.standAniName = "right,Rdown,down,Ldown,left,Lup,up,Rup";
      /** 记录stage上的鼠标点，当频繁使用stage坐标转化时，可以减少实例开销 */
      this.stageMouse = new Point2();
      /** 中心点坐标偏移值 */
      this.axisPivot = new Point2();
      /** 摇杆角度 */
      this.angle = 0;
      /** 摇杆弧度 */
      this.radian = 0;
      /** 是否允许跑动 */
      this.isMoving = false;
      this.isRun = false;
      this.mLastX = 0;
      this.mLastY = 0;
    }
    onEnable() {
      this.createMap();
      this.joystickAxis = this.joystickBG.getChildByName("joystickAxis");
      this.maxDistance = this.joystickBG.width - this.joystickAxis.width;
      this.axisPivot.x = this.joystickAxis.x;
      this.axisPivot.y = this.joystickAxis.y;
      this.sceneWindow.on(Event3.MOUSE_DOWN, this, this.mouseDown);
      this.sceneWindow.on(Event3.MOUSE_MOVE, this, this.mouseMove);
      this.sceneWindow.on(Event3.MOUSE_UP, this, this.mouseUp);
      this.sceneWindow.on(Event3.MOUSE_OUT, this, this.mouseUp);
      this.roleAniNode = this.roleAni.create();
      this.sceneWindow.addChild(this.roleAniNode);
      this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2);
      this.roleAniNode.x = this.sceneWindow.width / 2;
      this.roleAniNode.y = this.sceneWindow.height / 2;
      this._animator = this.roleAniNode.getComponent(Laya.Animator2D);
      let aniState = this._animator.getDefaultState();
      console.log(aniState.name);
    }
    //创建地图
    createMap() {
      this.tiledMap = new Laya.TiledMap();
      this.tiledMap.createMap("resources/tiledMap/desert_new.json", new Laya.Rectangle(0, 0, this.sceneWindow.width, this.sceneWindow.height), new Laya.Handler(this, this.completeHandler));
    }
    onLoaded() {
      this.tiledMap.mapSprite().removeSelf();
      this.gameMap.addChild(this.tiledMap.mapSprite());
    }
    /**
     * 地图加载完成的回调
     */
    completeHandler(e = null) {
      this.onLoaded();
    }
    /** 侦听panel 鼠标\手势按下时 */
    mouseDown(e) {
      this.touchId = e.touchId;
      this.isMoving = true;
      this.updateJoystickPoint();
    }
    /** 更新摇杆按下的位置 */
    updateJoystickPoint() {
      this.stageMouse.x = Laya.stage.mouseX;
      this.stageMouse.y = Laya.stage.mouseY;
      let joystickBGMouse = this.joystickBG.globalToLocal(this.stageMouse), mouseX = joystickBGMouse.x - this.joystickAxis.width / 2, mouseY = joystickBGMouse.y - this.joystickAxis.height / 2;
      this.radian = Math.atan2(mouseY - this.axisPivot.y, mouseX - this.axisPivot.x);
      this.lastAngle = this.angle;
      this.angle = Math.round(this.radian * 180 / Math.PI * 10) / 10;
      this.angle < 0 && (this.angle += 360);
      let distance = this.getDistance(this.joystickBG.width / 2, this.joystickBG.height / 2, joystickBGMouse.x, joystickBGMouse.y);
      if (distance > this.maxDistance && this.lastAngle !== this.angle) {
        this.joystickAxis.x = Math.floor(Math.cos(this.radian) * this.maxDistance) + this.axisPivot.x;
        this.joystickAxis.y = Math.floor(Math.sin(this.radian) * this.maxDistance) + this.axisPivot.y;
      } else {
        this.joystickAxis.pos(joystickBGMouse.x - this.joystickAxis.width / 2, joystickBGMouse.y - this.joystickAxis.height / 2);
      }
      this.switchAni("run");
    }
    /** 切换动画
     * @param aniType 动作类型
     */
    switchAni(aniType) {
      if (aniType == "run") {
        let _runAniName = this.getOrientation(this.angle, this.runAniName);
        if (_runAniName !== this.lastRunAniName) {
          this.lastRunAniName = _runAniName;
          this._animator.play(_runAniName);
        }
        this.isRun = true;
      } else {
        this.isRun = false;
        let standS = this.getOrientation(this.angle, this.standAniName);
        this.lastAngle !== this.angle && this._animator.play(standS);
      }
    }
    /** 鼠标抬起时 */
    mouseUp(e) {
      if (e.touchId != this.touchId)
        return;
      this.touchId = null;
      this.isMoving = false;
      this.joystickAxis.pos(this.axisPivot.x, this.axisPivot.y);
      this.switchAni("stand");
    }
    /** 鼠标移动的时候 */
    mouseMove(e) {
      if (e.touchId != this.touchId)
        return;
      this.updateJoystickPoint();
    }
    /** 根据角度得到朝向动画名 
     * @param angle 角度
     * @param aniName 动画名称字符串
     * @return 动画名
    */
    getOrientation(angle, aniName) {
      let aniArr = aniName.split(",");
      const angleConditions = 360 / aniArr.length;
      return aniArr[Math.floor(angle / angleConditions)];
    }
    onUpdate() {
      if (!this.isMoving)
        return;
      this.updateRoleMove();
    }
    /** 更新角色移动相关 */
    updateRoleMove() {
      this.switchAni("run");
      let dx = Math.cos(this.radian) * 2;
      let dy = Math.sin(this.radian) * 2;
      this.mLastX += dx;
      this.mLastY += dy;
      if (this.mLastX < 0)
        this.mLastX = 0;
      else if (this.mLastX > 1920 - this.sceneWindow.width)
        this.mLastX = 1920 - this.sceneWindow.width;
      if (this.mLastY < 0)
        this.mLastY = 0;
      else if (this.mLastY > 1280 - this.sceneWindow.height)
        this.mLastY = 1280 - this.sceneWindow.height;
      this.tiledMap.moveViewPort(this.mLastX, this.mLastY);
    }
    /** 
    * 获得两个坐标点的直线距离，
    * 依据勾股定理，用目标坐标的分量与原始坐标的分量计算斜边(目标点到鼠标点的直线距离)，用于判断是否超出限制范围
    * @param centerX 原始的中心点坐标X轴位置
    * @param centerY 原始的中心点坐标Y轴位置
    * @param mouseX 鼠标点X轴位置
    * @param mouseY 鼠标点Y轴位置
    */
    getDistance(centerX, centerY, mouseX, mouseY) {
      let dx = centerX - mouseX, dy = centerY - mouseY;
      return Math.sqrt(dx * dx + dy * dy);
    }
    onDisable() {
      Laya.stage.off(Event3.MOUSE_DOWN, this, this.mouseDown);
      Laya.stage.off(Event3.MOUSE_UP, this, this.mouseUp);
      Laya.stage.off(Event3.MOUSE_MOVE, this, this.mouseMove);
      if (this.tiledMap) {
        this.tiledMap.destroy();
      }
    }
  };
  __name(TileMap, "TileMap");
  __decorateClass([
    property15(Laya.Sprite)
  ], TileMap.prototype, "gameMap", 2);
  __decorateClass([
    property15(Laya.Prefab)
  ], TileMap.prototype, "roleAni", 2);
  __decorateClass([
    property15({ type: "string" })
  ], TileMap.prototype, "runAniName", 2);
  __decorateClass([
    property15({ type: "string" })
  ], TileMap.prototype, "standAniName", 2);
  __decorateClass([
    property15({ type: Laya.Panel })
  ], TileMap.prototype, "sceneWindow", 2);
  __decorateClass([
    property15(Laya.Image)
  ], TileMap.prototype, "joystickBG", 2);
  TileMap = __decorateClass([
    regClass21("de56824a-97b4-4961-9bd0-840c2af4b097", "../src/scence/uiDemo/interactive/TileMap.ts")
  ], TileMap);

  // src/scence/uiDemo/list/BagListRT.generated.ts
  var _BagListRTBase = class _BagListRTBase extends Laya.View {
  };
  __name(_BagListRTBase, "BagListRTBase");
  var BagListRTBase = _BagListRTBase;

  // src/scence/uiDemo/list/BagListRT.ts
  var { regClass: regClass22 } = Laya;
  var BagListRT = class extends BagListRTBase {
    constructor() {
      super();
      this.lastIndex = -1;
    }
    onEnable() {
      const jsonPath = "resources/json/bagList.json";
      Laya.loader.fetch(jsonPath, "json").then((_json) => {
        if (_json.bagList && _json.bagList.length > 0) {
          this.bagList.array = _json.bagList;
          this.bagList.renderHandler = new Laya.Handler(this, this.onListRender);
          this.bagList.selectHandler = new Laya.Handler(this, this.onListSelect);
          this.bagList.mouseHandler = new Laya.Handler(this, this.onListMouse);
          this.bagList.vScrollBarSkin = "";
        }
      });
    }
    /** 列表单元的渲染处理 */
    onListRender(item, index) {
      if (index > this.bagList.array.length || index < 0)
        return;
      const listItemBG = item.getChildByName("listItemBG");
      if (index === this.lastIndex) {
        listItemBG.skin = "resources/UI/images/bg/bg100-1.png";
      } else {
        listItemBG.skin = "resources/UI/images/bg/bg100-0.png";
      }
    }
    /**列表选择改变处理 
     * @readme 这里是为了示范怎么在选项切换里处理数据的变化，故意采用了自定义的方式处理选中状态切换。
     * 如果只是为了列表单元的选中状态切换， 引擎里提供了更简单的设置方式：将选中态ui的name设置为selectBox。
     * 简单方式，可参照拉动刷新列表的示例。
    */
    onListSelect(index) {
      this.tips.visible = true;
      this.lastIndex = index;
      this.bagList.refresh();
      this.itemImg.skin = this.bagList.array[index].listItemImg.skin;
      this.itemNumber.text = "数量 " + this.bagList.array[index].listItemNumber.text;
      this.itemReadme.text = this.bagList.array[index].readme;
    }
    /**列表单元上的鼠标事件处理 */
    onListMouse(e, index) {
    }
    onDisable() {
    }
  };
  __name(BagListRT, "BagListRT");
  BagListRT = __decorateClass([
    regClass22("7e299e45-3617-4f8e-9e30-7ea4a26c2125", "../src/scence/uiDemo/list/BagListRT.ts")
  ], BagListRT);

  // src/scence/uiDemo/list/ComboBoxRT.ts
  var { regClass: regClass23, property: property16 } = Laya;
  var ComboBoxRT = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      var _dataSourece = this.getDataSourece();
      Laya.loader.load("prefab/ComboList.lh").then((res) => {
        let node = res.create();
        this.comboList = node;
        this.comboList.array = _dataSourece;
        this.comboList.repeatY = _dataSourece.length;
        this.combo2.list = this.comboList;
        this.combo2.list.width = this.combo2.width;
        this.combo2.list.hScrollBarSkin = "";
        this.combo2.selectHandler = new Laya.Handler(this, this.onSelected2);
      });
      this.combo1.selectHandler = new Laya.Handler(this, this.onSelected1);
    }
    onSelected1(index) {
      this.selectedText.text = "您选中了：" + this.combo1.selectedLabel;
    }
    onSelected2(index) {
      this.selectedText.text = "您选中了：" + (index < 0 ? "" : this.comboList.array[index].label);
    }
    /**
     * 创建List用的模拟数据
     */
    getDataSourece() {
      for (var _data = [], i = 0; i < 10; i++) {
        _data[i] = { "optText": { "text": "选项" + (i + 1) } };
      }
      return _data;
    }
    onDisable() {
    }
  };
  __name(ComboBoxRT, "ComboBoxRT");
  __decorateClass([
    property16({ type: Laya.ComboBox })
  ], ComboBoxRT.prototype, "combo1", 2);
  __decorateClass([
    property16({ type: Laya.ComboBox })
  ], ComboBoxRT.prototype, "combo2", 2);
  __decorateClass([
    property16({ type: Laya.Label })
  ], ComboBoxRT.prototype, "selectedText", 2);
  ComboBoxRT = __decorateClass([
    regClass23("33a6c6ca-a0d2-4421-94dd-392f35eaaf47", "../src/scence/uiDemo/list/ComboBoxRT.ts")
  ], ComboBoxRT);

  // src/scence/uiDemo/list/LoopListRT.generated.ts
  var _LoopListRTBase = class _LoopListRTBase extends Laya.View {
  };
  __name(_LoopListRTBase, "LoopListRTBase");
  var LoopListRTBase = _LoopListRTBase;

  // src/scence/uiDemo/list/LoopListRT.ts
  var { regClass: regClass24 } = Laya;
  var LoopListRT = class extends LoopListRTBase {
    onEnable() {
      this.hList.array = this.getListDataSource();
      this.hList.scrollTo(1);
      let icon = this.hList.cells[1].getChildByName("icon");
      icon.scaleX = icon.scaleY = 2;
      this.hList.scrollBar.on(Laya.Event.CHANGE, this, this.onScrollBarChange);
      this.leftLimit = this.getLeftLimit();
      this.rightLimit = this.getRightLimit();
    }
    onScrollBarChange() {
      var sliderValue = this.hList.scrollBar.value;
      var listArr = this.hList.array;
      if (sliderValue > this.leftLimit) {
        var cell = listArr.shift();
        listArr[listArr.length] = cell;
        this.hList.array = listArr;
        this.hList.scrollBar.value = sliderValue - this.hList.cells[0].width - this.hList.spaceX;
        this.iconTweenToLeft();
      } else if (sliderValue < this.rightLimit) {
        cell = listArr.pop();
        listArr.unshift(cell);
        this.hList.array = listArr;
        this.hList.scrollBar.value = sliderValue + this.hList.cells[0].width + this.hList.spaceX;
        this.iconTweenToRight();
      }
    }
    /**
     * 左划缓动处理头像
     * @param time 缓动效果时间
     */
    iconTweenToLeft(time = 200) {
      let iconOld = this.hList.cells[0].getChildByName("icon");
      iconOld.scaleX = iconOld.scaleY = 2;
      Laya.Tween.to(iconOld, { scaleX: 1, scaleY: 1 }, time);
      let icon = this.hList.cells[1].getChildByName("icon");
      icon.scaleX = icon.scaleY = 1;
      Laya.Tween.to(icon, { scaleX: 2, scaleY: 2 }, time);
    }
    /**
     * 右划缓动处理头像
     * @param time 缓动效果时间
     */
    iconTweenToRight(time = 200) {
      let iconOld = this.hList.cells[1].getChildByName("icon");
      iconOld.scaleX = iconOld.scaleY = 2;
      Laya.Tween.to(iconOld, { scaleX: 1, scaleY: 1 }, time);
      let icon = this.hList.cells[2].getChildByName("icon");
      icon.scaleX = icon.scaleY = 1;
      Laya.Tween.to(icon, { scaleX: 2, scaleY: 2 }, time);
    }
    /**取得右划限制 */
    getRightLimit() {
      return this.hList.cells[0].width - this.hList.spaceX;
    }
    /**取得左划限制 */
    getLeftLimit() {
      return this.hList.cells[0].width * 2 + this.hList.spaceX;
    }
    /**
     * 模拟数据源
     * @param length 生成的数组长度
     */
    getListDataSource(length = 5) {
      let _arr = [];
      for (let i = 0; i < length; i++) {
        _arr[i] = {};
        _arr[i].icon = { "skin": `resources/UI/role/r${i}.png` };
      }
      return _arr;
    }
  };
  __name(LoopListRT, "LoopListRT");
  LoopListRT = __decorateClass([
    regClass24("5856a0ef-2630-47da-be88-8df538951e76", "../src/scence/uiDemo/list/LoopListRT.ts")
  ], LoopListRT);

  // src/scence/uiDemo/list/MailListRT.generated.ts
  var _MailListRTBase = class _MailListRTBase extends Laya.Box {
  };
  __name(_MailListRTBase, "MailListRTBase");
  var MailListRTBase = _MailListRTBase;

  // src/scence/uiDemo/list/MailListRT.ts
  var { regClass: regClass25 } = Laya;
  var MailListRT = class extends MailListRTBase {
    constructor() {
      super(...arguments);
      /** 记录当前的选项 */
      this.optStatus = [];
      /** 记录用于递增的ID */
      this.id = 0;
      /**
       * 将时间戳转换为格式化后的时间文本
       * @param timestamp 时间戳
       * @param fmt 格式，默认为："YYYY-MM-DD hh:mm:ss"
       * @returns 返回格式化后的时间字符串
       */
      this.timestampFormat = /* @__PURE__ */ __name((fmt, datetime) => {
        let _this = datetime ? new Date(datetime) : /* @__PURE__ */ new Date();
        let o = {
          "M+": _this.getMonth() + 1,
          "D+": _this.getDate(),
          "h+": _this.getHours(),
          "m+": _this.getMinutes(),
          "s+": _this.getSeconds(),
          "S+": _this.getMilliseconds()
        };
        if (new RegExp("(Y+)").test(fmt))
          fmt = fmt.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        return fmt;
      }, "timestampFormat");
    }
    onEnable() {
      const jsonPath = "resources/json/mailList.json";
      Laya.loader.fetch(jsonPath, "json").then((data) => {
        let jsonData = data.mailList;
        if (jsonData && jsonData.length > 0) {
          this.mailList.array = jsonData;
          this.mailList.mouseHandler = new Laya.Handler(this, this.onListMouse);
        }
        this.id = jsonData.length;
        this.addMail.on(Laya.Event.CLICK, this, this.addMialItem);
        this.selectDel.on(Laya.Event.CLICK, this, this.listSelectDel);
        this.selectFlag.on(Laya.Event.CLICK, this, this.listSelectFlag);
      });
    }
    /**
     * 
     * @param index 索引
     * @param flag 标记状态 
     * @param skin 标记状态的皮肤
     * @param label 标记按钮的文本 
     * @param labelColors 标记按钮的文本颜色
     */
    updateMailStatus(index, flag, skin, label, labelColors) {
      this.mailList.array[index].flag = flag;
      this.mailList.array[index].flagStatus.skin = skin;
      this.mailList.array[index].flagBtn = { "label": label, "labelColors": labelColors };
    }
    /** 标记选中单元为已读 */
    listSelectFlag() {
      if (this.optStatus.length > 0) {
        for (let i = 0; i < this.optStatus.length; i++) {
          let index = this.optStatus[i];
          this.updateMailStatus(index, 1, "resources/UI/images/comp/img_mail_open.png", "标为未读", "#3277f3,#3277f3,#3277f3");
        }
        this.mailList.refresh();
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "已成功标记" });
      } else
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "没有勾选项，请先勾选" });
    }
    /** 删除选中的列表单元*/
    listSelectDel() {
      if (this.optStatus.length > 0) {
        this.optStatus.sort(function(a, b) {
          return b - a;
        });
        for (let i = 0; i < this.optStatus.length; i++) {
          this.mailList.array.splice(this.optStatus[i], 1);
        }
        this.optStatus = [];
        this.mailList.refresh();
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "已成功删除" });
      } else
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "没有勾选项，请先勾选" });
    }
    /** 新增邮件列表单元 */
    addMialItem() {
      var index = this.mailList.startIndex + 1;
      let itemData = {
        "mailTitle": {
          "text": "这里是新增加的邮件" + this.id
        },
        "mailDateTime": {
          "text": this.timestampFormat("YYYY-MM-DD hh:mm")
        },
        "opt": {
          "visible": false
        },
        "flagStatus": {
          "skin": "resources/UI/images/comp/img_mail.png"
        },
        "flagBtn": {
          "label": "标为已读",
          "labelColors": "#000000,#000000,#000000"
        }
      };
      this.id += 1;
      this.mailList.array.splice(index, 0, itemData);
      if (this.optStatus.length > 0) {
        for (let i = 0; i < this.optStatus.length; i++) {
          if (this.optStatus[i] >= index) {
            this.optStatus[i] += 1;
          }
        }
      }
      this.mailList.refresh();
    }
    /**列表的鼠标事件处理，常用于处理单元格上的点击事件等 */
    onListMouse(e, index) {
      if (e.type == Laya.Event.CLICK) {
        var optIndex = this.optStatus.indexOf(index);
        switch (e.target.name) {
          case "optBG":
            if (optIndex === -1) {
              this.mailList.array[index].opt.visible = true;
              this.optStatus.push(index);
            } else {
              this.mailList.array[index].opt.visible = false;
              this.optStatus.splice(optIndex, 1);
            }
            this.mailList.refresh();
            break;
          case "mailTitle":
            Laya.Scene.open("scenes/uiDemo/Dialog.scene", false, { "title": this.mailList.array[index].mailTitle.text, "text": "邮件内容，此处省略1000字……………………" });
            this.updateMailStatus(index, 1, "resources/UI/images/comp/img_mail_open.png", "标为未读", "#3277f3,#3277f3,#3277f3");
            this.mailList.refresh();
            break;
          case "flagBtn":
            if (this.mailList.array[index].flag === 1) {
              this.updateMailStatus(index, 0, "resources/UI/images/comp/img_mail.png", "标为已读", "#000000,#000000,#000000");
            } else {
              this.updateMailStatus(index, 1, "resources/UI/images/comp/img_mail_open.png", "标为未读", "#3277f3,#3277f3,#3277f3");
            }
            this.mailList.refresh();
            break;
          case "delBtn":
            this.mailList.array.splice(index, 1);
            if (optIndex > -1) {
              this.optStatus.splice(optIndex, 1);
              for (let i = optIndex; i < this.optStatus.length; i++) {
                this.optStatus[i] -= 1;
              }
            }
            this.mailList.refresh();
            Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "删除成功" });
            break;
        }
      }
    }
  };
  __name(MailListRT, "MailListRT");
  MailListRT = __decorateClass([
    regClass25("1f3a493c-3504-40de-bd5e-0d556ac1dbfb", "../src/scence/uiDemo/list/MailListRT.ts")
  ], MailListRT);

  // src/scence/uiDemo/list/RefreshRT.ts
  var { regClass: regClass26, property: property17 } = Laya;
  var RefreshRT = class extends Laya.Script {
    constructor() {
      super();
      /** 滚动条效果是否停止 */
      this.scrollBarIsStop = false;
      /** 消息生成的当前最大id值 */
      this.msgIdNow = 1;
      /** 列表单元是否已打开 */
      this.itemIsOpen = false;
      /**展开的单元格索引ID */
      this.itemOpenId = -1;
      /** 记录模拟数据的红点状态 */
      this.redHotStatus = [];
      /** 纪录鼠标按下状态，true为已按下，用于状态判断 */
      this.mouseDown = false;
    }
    onEnable() {
      this.refreshList.array = this.createListData(9);
      this.refreshList.repeatY = this.refreshList.array.length;
      this.refreshList.vScrollBarSkin = "";
      this.toLine.on(Laya.Event.CLICK, this, this.onToLineBtn);
      this.toTop.on(Laya.Event.CLICK, this, this.onToTopBtn);
      this.toBottom.on(Laya.Event.CLICK, this, this.onToBottomBtn);
      this.refreshList.on(Laya.Event.MOUSE_UP, this, this.stageOnMouseUp);
      this.refreshList.on(Laya.Event.MOUSE_OUT, this, this.stageOnMouseUp);
      this.refreshList.scrollBar.stopMoveLimit = this.scrollBarIsStopBind.bind(this);
      this.refreshLimit("dragTopLimit", 80);
      this.refreshLimit("dragBottomLimit", 80, 20);
      this.refreshList.mouseHandler = new Laya.Handler(this, this.onListMouse);
    }
    stageOnMouseUp() {
      this.mouseDown = false;
    }
    /**
     * 处理列表刷新数据时的限制
     * @param eventName 要侦听的事件名
     * @param moveLimit 移动距离的上限，达到上限后才会抛出要侦听的事件
     * @param distance 相对布局，位于父节点的距离
     * @param time  需要加载多少毫秒后恢复
     */
    refreshLimit(eventName, moveLimit, distance = 0, time = 2e3) {
      if (eventName === "dragTopLimit") {
        this.refreshList.scrollBar.topMoveLimit = moveLimit;
      } else if (eventName === "dragBottomLimit") {
        this.refreshList.scrollBar.bottomMoveLimit = moveLimit;
      }
      this.refreshList.scrollBar.on(eventName, this, () => {
        console.log("达到了滚动限制:" + eventName);
        this.refreshLoading.visible = true;
        if (eventName === "dragTopLimit") {
          this.refreshLoading.bottom = NaN;
          this.refreshLoading.top = distance;
          var _arr = this.createListData(5, "顶部新增的标题");
          _arr = _arr.concat(this.refreshList.array);
          var index = 0 + 5;
          var line = 0;
          if (this.redHotStatus.length > 0) {
            for (let i = 0; i < this.redHotStatus.length; i++) {
              this.redHotStatus[i] += 5;
            }
          }
        } else if (eventName === "dragBottomLimit") {
          this.refreshList.scrollBar.disableDrag = true;
          this.refreshLoading.top = NaN;
          this.refreshLoading.bottom = distance;
          var _arr = this.createListData(5, "底部新增的标题");
          _arr = this.refreshList.array.concat(_arr);
          var index = this.refreshList.array.length - 1;
          var line = index + 5;
        }
        this.scrollBarIsStop = true;
        Laya.timer.once(time, this, () => {
          this.refreshList.array = _arr;
          this.refreshList.scrollTo(line);
          this.refreshList.selectedIndex = index;
          this.scrollBarIsStop = false;
          this.refreshList.scrollBar.backToNormal();
          this.refreshLoading.visible = false;
        });
      });
    }
    /**列表的鼠标事件处理，常用于处理单元格上的点击事件等 */
    onListMouse(e, index) {
      if (e.type == Laya.Event.MOUSE_DOWN) {
        this.mouseDown = true;
        if (this.itemIsOpen) {
          this.itemIsOpen = false;
          this.itemOpenId = -1;
          Laya.Tween.to(this.openedItem, { "x": 0 }, 500, null, Laya.Handler.create(this, () => {
            this.refreshList.scrollBar.disableDrag = false;
          }));
        } else {
          this.moveLastPos = e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
          e.target.on(Laya.Event.MOUSE_MOVE, this, this.onItemBoxMouseMove, [e.target, index]);
        }
      }
      if (e.type == Laya.Event.MOUSE_UP) {
        this.mouseDown = false;
        this.itemOnMouseUp();
      }
      if (e.type == Laya.Event.CLICK) {
        if (e.target.name == "flag")
          this.onClickFlag(index);
        if (e.target.name == "del")
          this.onClickDel(index);
      }
    }
    /** 列表单元格上的鼠标抬起时处理恢复逻辑
     */
    itemOnMouseUp() {
      if (this.itemIsOpen) {
        var targetX;
        if (this.openedItem.x < -80) {
          targetX = -262;
        } else {
          this.itemIsOpen = false;
          targetX = 0;
        }
        if (targetX !== this.openedItem.x) {
          Laya.Tween.to(this.openedItem, { "x": targetX }, 500);
        }
        this.refreshList.scrollBar.disableDrag = false;
        if (this.itemOpenId !== -1) {
          this.openedItem.off(Laya.Event.MOUSE_MOVE, this, this.onItemBoxMouseMove);
          this.itemOpenId = -1;
        }
      }
    }
    /** 点击标记按钮处理
     * @param index 要删除的列表索引
    */
    onClickFlag(index) {
      var showRedHot = this.redHotStatus.indexOf(index);
      if (showRedHot == -1) {
        this.refreshList.array[index].avatar = {};
        this.refreshList.array[index].avatar.redHot = { "visible": true };
        this.refreshList.array[index].flag = { "flagText": { "text": "标记已读" } };
        this.redHotStatus.push(index);
      } else {
        this.refreshList.array[index].avatar = { "redHot": { "visible": false } };
        this.refreshList.array[index].flag = { "flagText": { "text": "标记未读" } };
        this.redHotStatus.splice(showRedHot, 1);
      }
      this.refreshList.refresh();
    }
    /** 单元格上的删除按钮点击逻辑 
     * @param index 要删除的列表索引
    */
    onClickDel(index) {
      this.refreshList.array.splice(index, 1);
      this.itemOpenId = -1;
      var showRedHot = this.redHotStatus.indexOf(index);
      if (showRedHot > -1) {
        this.redHotStatus.splice(index, 1);
      }
      if (this.redHotStatus.length > 0) {
        for (let i = 0; i < this.redHotStatus.length; i++) {
          this.redHotStatus[i] > index && (this.redHotStatus[i] += 1);
        }
      }
      this.refreshList.refresh();
    }
    /** 列表当前单元格的鼠标移动事件的处理
     * @param item 单元格对象
     * @param index 单元格索引
    */
    onItemBoxMouseMove(item, index) {
      if (this.mouseDown) {
        let mousePos = item.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
        let moveX = this.moveLastPos.x - mousePos.x;
        let moveY = this.moveLastPos.y - mousePos.y;
        if (Math.abs(moveX) > Math.abs(moveY) && !this.itemIsOpen) {
          this.openedItem = item;
          this.itemIsOpen = true;
          this.refreshList.scrollBar.disableDrag = true;
          this.itemOpenId = index;
        }
        if (this.itemIsOpen) {
          this.openedItem.x -= moveX;
          if (this.openedItem.x < -262)
            this.openedItem.x = -262;
          else if (this.openedItem.x > 0)
            this.openedItem.x = 0;
        }
      } else {
        this.refreshList.scrollBar.disableDrag = false;
      }
    }
    /** 关联引擎的滚动限制接口 */
    scrollBarIsStopBind() {
      return this.scrollBarIsStop;
    }
    /** 当点击跳转XX行的按钮时 */
    onToLineBtn() {
      let line = parseInt(this.lineNumber.text) - 1;
      this.refreshList.scrollTo(line);
      line < this.refreshList.array.length && (this.refreshList.selectedIndex = line);
    }
    /** 当点击跳转顶部的按钮时 */
    onToTopBtn() {
      this.refreshList.scrollTo(0);
      this.refreshList.selectedIndex = 0;
    }
    /** 当点击跳转底部的按钮时 */
    onToBottomBtn() {
      let line = this.refreshList.array.length - 1;
      this.refreshList.scrollTo(line);
      this.refreshList.selectedIndex = line;
    }
    /** 创建list模拟数据
     * @param max 最大生成数量
     * @param msgTitle 标题文本
     */
    createListData(max = 5, msgTitle = "初始测试标题") {
      let _Date = /* @__PURE__ */ new Date();
      let _hour = _Date.getHours() < 10 ? "0" + _Date.getHours() : "" + _Date.getHours();
      let _minute = _Date.getMinutes() < 10 ? "0" + _Date.getMinutes() : "" + _Date.getMinutes();
      var _arr = [];
      for (var i = 0; i < max; i++) {
        let msgTime = { "text": _hour + " : " + _minute };
        _arr[i] = {};
        _arr[i].msgTime = msgTime;
        _arr[i].msgTitle = { "text": msgTitle + (this.msgIdNow + i) };
        _arr[i].avatar = { "redHot": { "visible": false } };
      }
      this.msgIdNow += i;
      return _arr;
    }
    onDisable() {
    }
  };
  __name(RefreshRT, "RefreshRT");
  __decorateClass([
    property17({ type: Laya.List })
  ], RefreshRT.prototype, "refreshList", 2);
  __decorateClass([
    property17({ type: Laya.Button })
  ], RefreshRT.prototype, "toLine", 2);
  __decorateClass([
    property17({ type: Laya.Button })
  ], RefreshRT.prototype, "toTop", 2);
  __decorateClass([
    property17({ type: Laya.Button })
  ], RefreshRT.prototype, "toBottom", 2);
  __decorateClass([
    property17({ type: Laya.Box })
  ], RefreshRT.prototype, "refreshLoading", 2);
  __decorateClass([
    property17({ type: Laya.Label })
  ], RefreshRT.prototype, "lineNumber", 2);
  RefreshRT = __decorateClass([
    regClass26("9b44d1f3-0d20-4db5-92bc-76d94f3ace44", "../src/scence/uiDemo/list/RefreshRT.ts")
  ], RefreshRT);

  // src/scence/uiDemo/list/TreeListRT.generated.ts
  var _TreeListRTBase = class _TreeListRTBase extends Laya.View {
  };
  __name(_TreeListRTBase, "TreeListRTBase");
  var TreeListRTBase = _TreeListRTBase;

  // src/scence/uiDemo/list/TreeListRT.ts
  var { regClass: regClass27, property: property18 } = Laya;
  var TreeListRT = class extends TreeListRTBase {
    onEnable() {
      this.tree1.xml = this.getTreeData(true);
      this.tree2.xml = this.getTreeData(false);
    }
    getTreeData(_static) {
      let treeData = "<data>";
      if (_static) {
        treeData += "<dir itemLabel='一级目录一' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><dir itemLabel='一级目录二' isOpen='true'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/></dir><dir itemLabel='一级目录三' isOpen='false'><file itemLabel='二级子项1 '/><file itemLabel='二级子项2 '/><file itemLabel='二级子项3 '/><file itemLabel='二级子项4 '/><file itemLabel='二级子项5 '/></dir><file itemLabel='一级子项1 '/><file itemLabel='一级子项2 '/>";
      } else {
        for (let i = 0; i < 5; i++) {
          treeData += "<item title='目录" + (i + 1) + "' isOpen='true'>";
          for (let j = 0; j < 5; j++) {
            treeData += "<subpage title='子项标题" + (j + 1) + "' />";
          }
          treeData += "</item>";
        }
      }
      treeData += "</data>";
      return new Laya.XML(treeData);
      ;
    }
  };
  __name(TreeListRT, "TreeListRT");
  TreeListRT = __decorateClass([
    regClass27("1895ad58-5c2c-428a-8da6-3035938d92a5", "../src/scence/uiDemo/list/TreeListRT.ts")
  ], TreeListRT);

  // src/scence/uiDemo/page/BaseUI.ts
  var { regClass: regClass28, property: property19 } = Laya;
  var BaseUI = class extends Laya.Script {
    constructor() {
      super();
    }
    //可以统一处理所有UI的事情，比如初始化UI，处理事件等等
    baseUI(ui) {
      this.window = ui;
      this.searchCloseButton(ui);
    }
    //统一查找所有的Button，并查看是不是关闭button添加关闭场景事件
    searchCloseButton(node) {
      for (let i = 0; i < node.numChildren; i++) {
        let child = node.getChildAt(i);
        if (child instanceof Laya.Button && child.name == "closeBtn") {
          child.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.window.close();
          });
          console.log("baseUI 发现closeBtn，统一添加关闭事件");
        } else
          this.searchCloseButton(child);
      }
    }
    onDisable() {
    }
  };
  __name(BaseUI, "BaseUI");
  BaseUI = __decorateClass([
    regClass28("ec5933e1-3ec9-439b-a3c0-d708c7d94634", "../src/scence/uiDemo/page/BaseUI.ts")
  ], BaseUI);

  // src/scence/uiDemo/page/OpenMainScene.generated.ts
  var _OpenMainSceneBase = class _OpenMainSceneBase extends Laya.Scene {
  };
  __name(_OpenMainSceneBase, "OpenMainSceneBase");
  var OpenMainSceneBase = _OpenMainSceneBase;

  // src/scence/uiDemo/page/OpenMainScene.ts
  var { regClass: regClass29, property: property20 } = Laya;
  var OpenMainScene = class extends OpenMainSceneBase {
    onEnable() {
    }
    onDisable() {
    }
  };
  __name(OpenMainScene, "OpenMainScene");
  OpenMainScene = __decorateClass([
    regClass29("250d5f92-ad37-4e17-b0a9-05915d03e09b", "../src/scence/uiDemo/page/OpenMainScene.ts")
  ], OpenMainScene);

  // src/scence/uiDemo/page/OpenMainSceneScript.ts
  var { regClass: regClass30, property: property21 } = Laya;
  var OpenMainSceneScript = class extends BaseUI {
    constructor() {
      super();
    }
    onEnable() {
      this.ui = this.owner;
      this.baseUI(this.ui);
    }
    onDisable() {
    }
  };
  __name(OpenMainSceneScript, "OpenMainSceneScript");
  OpenMainSceneScript = __decorateClass([
    regClass30("bad37b25-0b3f-4f78-b0e8-aa964fe6de15", "../src/scence/uiDemo/page/OpenMainSceneScript.ts")
  ], OpenMainSceneScript);

  // src/scence/uiDemo/page/OpenScene.generated.ts
  var _OpenSceneBase = class _OpenSceneBase extends Laya.Box {
  };
  __name(_OpenSceneBase, "OpenSceneBase");
  var OpenSceneBase = _OpenSceneBase;

  // src/scence/uiDemo/page/OpenScene.ts
  var { regClass: regClass31, property: property22 } = Laya;
  var OpenScene = class extends OpenSceneBase {
    constructor() {
      super();
      this.name1 = "我是OpenSceneRuntime";
    }
    onEnable() {
      console.log("OpenScene onEnable：" + this.name1);
      this.window.on(Laya.Event.MOUSE_DOWN, this, () => {
        this.window.startDrag();
      });
      this.closeBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
        console.log("close");
        this.removeSelf();
      });
    }
    getName() {
      console.log(this.name1);
    }
    onDisable() {
    }
  };
  __name(OpenScene, "OpenScene");
  OpenScene = __decorateClass([
    regClass31("7f7da5ee-1dfc-4f0e-baae-c9bc61757eb7", "../src/scence/uiDemo/page/OpenScene.ts")
  ], OpenScene);

  // src/scence/uiDemo/page/OpenSceneScript.ts
  var { regClass: regClass32, property: property23 } = Laya;
  var OpenSceneScript = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.ui = this.owner;
      this.ui.name1 = "我在使用OpenSceneScript";
      this.ui.getName();
    }
    onDisable() {
    }
  };
  __name(OpenSceneScript, "OpenSceneScript");
  OpenSceneScript = __decorateClass([
    regClass32("982cfbc4-524c-477f-bc7c-311ac3b02bb4", "../src/scence/uiDemo/page/OpenSceneScript.ts")
  ], OpenSceneScript);

  // src/scence/uiDemo/page/UsePanelRT.generated.ts
  var _UsePanelRTBase = class _UsePanelRTBase extends Laya.Box {
  };
  __name(_UsePanelRTBase, "UsePanelRTBase");
  var UsePanelRTBase = _UsePanelRTBase;

  // src/scence/uiDemo/page/UsePanelRT.ts
  var { regClass: regClass33, property: property24 } = Laya;
  var Event4 = Laya.Event;
  var Mouse = Laya.Mouse;
  var UsePanelRT = class extends UsePanelRTBase {
    constructor() {
      super();
    }
    onEnable() {
      if (!Laya.Browser.onPC) {
        this.topLab.text = "背景可拖拽，双指缩放改变大小";
      } else {
        this.panel.on(Event4.MOUSE_OVER, this, () => {
          Mouse.cursor = "move";
        });
        this.panel.on(Event4.MOUSE_OUT, this, () => {
          Mouse.cursor = "auto";
        });
      }
    }
  };
  __name(UsePanelRT, "UsePanelRT");
  UsePanelRT = __decorateClass([
    regClass33("f6cd525b-d58a-46b4-a876-8e89636ed54b", "../src/scence/uiDemo/page/UsePanelRT.ts")
  ], UsePanelRT);

  // src/scence/uiDemo/useUI/ChangeTextureRT.generated.ts
  var _ChangeTextureRTBase = class _ChangeTextureRTBase extends Laya.Box {
  };
  __name(_ChangeTextureRTBase, "ChangeTextureRTBase");
  var ChangeTextureRTBase = _ChangeTextureRTBase;

  // src/scence/uiDemo/useUI/ChangeTextureRT.ts
  var { regClass: regClass34 } = Laya;
  var ChangeTextureRT = class extends ChangeTextureRTBase {
    onEnable() {
      Laya.timer.loop(2e3, this, () => {
        this.changeImgSkin();
        this.changeSpriteTexture();
        this.changeFillTexture();
        this.changeTexture();
      });
    }
    /** 替换Image组件的资源 */
    changeImgSkin() {
      this.Img.skin = this.randomImg();
    }
    /**替换Sprite组件的资源 */
    changeSpriteTexture() {
      this.spImg.loadImage(this.randomImg(true, 6, 5));
    }
    /**替换FillTexture资源，基于Graphics绘图只能是重绘 */
    changeFillTexture() {
      this.fillTexture.graphics.clear();
      let imgTexture = this.randomImg(true, 4);
      Laya.loader.load(imgTexture).then((res) => {
        this.fillTexture.graphics.fillTexture(res, 0, 0, 132, 274);
      });
    }
    /** 替换Texture资源，基于Graphics绘图只能是重绘 */
    changeTexture() {
      this.textureImg.graphics.clear();
      let _texture = Laya.loader.getRes(this.randomImg(true, 8));
      this.textureImg.graphics.drawTexture(_texture);
    }
    /** 生成随意图片地址 */
    randomImg(isMan = false, max = 8, min = 1) {
      let mum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (isMan)
        return "resources/UI/role/m" + mum + ".png";
      return "resources/UI/role/w" + mum + ".png";
    }
  };
  __name(ChangeTextureRT, "ChangeTextureRT");
  ChangeTextureRT = __decorateClass([
    regClass34("ba580231-67c2-40a8-a285-22729e96c916", "../src/scence/uiDemo/useUI/ChangeTextureRT.ts")
  ], ChangeTextureRT);

  // src/scence/uiDemo/useUI/MaskRT.generated.ts
  var _MaskRTBase = class _MaskRTBase extends Laya.View {
  };
  __name(_MaskRTBase, "MaskRTBase");
  var MaskRTBase = _MaskRTBase;

  // src/scence/uiDemo/useUI/MaskRT.ts
  var { regClass: regClass35, property: property25 } = Laya;
  var Event5 = Laya.Event;
  var MaskRT = class extends MaskRTBase {
    onEnable() {
      this._hitArea.on(Event5.MOUSE_DOWN, this, () => {
        this._hitArea.off(Event5.MOUSE_MOVE, this, this.bg3MaskMove);
        this._hitArea.startDrag();
        this._hitArea.on(Event5.MOUSE_MOVE, this, this.bg3MaskMove);
      });
      this._mask.on(Event5.MOUSE_MOVE, this, this.maskMove);
    }
    bg3MaskMove(e) {
      e.stopPropagation();
      this.bg3Mask.x = this._hitArea.x;
      this.bg3Mask.y = this._hitArea.y;
    }
    maskMove() {
      let _point = this.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY)), maskX = _point.x - this._mask.width / this.bg2.scaleX / 2, maskY = _point.y - this._mask.height / this.bg2.scaleY / 2;
      if (maskX > 80 && maskY > 80) {
        this._mask.x = _point.x - this._mask.width / this.bg2.scaleX / 2;
        this._mask.y = _point.y - this._mask.height / this.bg2.scaleY / 2;
        this.bg2.x = (-_point.x - this._mask.width / 2) * (this.bg2.scaleX - 1);
        this.bg2.y = (-_point.y - this._mask.height / 2) * (this.bg2.scaleY - 1);
      }
    }
  };
  __name(MaskRT, "MaskRT");
  MaskRT = __decorateClass([
    regClass35("cedd2b06-c112-4fd2-9526-072299ded214", "../src/scence/uiDemo/useUI/MaskRT.ts")
  ], MaskRT);

  // src/scence/uiDemo/useUI/MouseThroughRT.ts
  var { regClass: regClass36, property: property26 } = Laya;
  var TextShowRT = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.changeMouseCursor();
      this.throughTab.selectHandler = new Laya.Handler(this, this.onSwitchTab);
    }
    /**当切换tab的index标签索引时 */
    onSwitchTab(index) {
      switch (index) {
        case 0:
          this.leftBg.hitTestPrior = true;
          this.rightBg.hitTestPrior = true;
          break;
        case 1:
          this.leftBg.hitTestPrior = false;
          this.rightBg.hitTestPrior = false;
          break;
      }
    }
    /**
     * 改变鼠标样式，
     * 通过侦听父节点的移入和移出事件，做出鼠标样式的改变，方便查看不同检测模式下，鼠标事件的交互区域变化
     */
    changeMouseCursor() {
      this.leftBg.on(Laya.Event.MOUSE_OVER, this, () => {
        Laya.Mouse.cursor = "move";
      });
      this.leftBg.on(Laya.Event.MOUSE_OUT, this, () => {
        Laya.Mouse.cursor = "auto";
      });
      this.rightBg.on(Laya.Event.MOUSE_OVER, this, () => {
        Laya.Mouse.cursor = "move";
      });
      this.rightBg.on(Laya.Event.MOUSE_OUT, this, () => {
        Laya.Mouse.cursor = "auto";
      });
      this.leftBg.on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "点击了左侧的可点击区域", "point": { x: Laya.stage.mouseX - 100 } });
        console.log("click " + this.leftBg.name);
      });
      this.rightBg.on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "点击了右侧的可点击区域", "point": { x: Laya.stage.mouseX - 120 } });
        console.log("click " + this.rightBg.name);
      });
      this.btn1.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "点击了测试按钮1" });
        console.log("click btn1");
      });
      this.btn2.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "点击了测试按钮2" });
        console.log("click btn2");
      });
      this.close1.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "点击了左侧关闭按钮", "point": { x: Laya.stage.mouseX - 100 } });
        console.log("click " + this.close1.name);
      });
      this.close2.on(Laya.Event.CLICK, this, (e) => {
        e.stopPropagation();
        Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": "点击了右侧关闭按钮", "point": { x: Laya.stage.mouseX - 120 } });
        console.log("click " + this.close2.name);
      });
    }
    onDisable() {
    }
  };
  __name(TextShowRT, "TextShowRT");
  __decorateClass([
    property26({ type: Laya.Tab })
  ], TextShowRT.prototype, "throughTab", 2);
  __decorateClass([
    property26({ type: Laya.Sprite })
  ], TextShowRT.prototype, "leftBg", 2);
  __decorateClass([
    property26({ type: Laya.Sprite })
  ], TextShowRT.prototype, "rightBg", 2);
  __decorateClass([
    property26({ type: Laya.Button })
  ], TextShowRT.prototype, "btn1", 2);
  __decorateClass([
    property26({ type: Laya.Button })
  ], TextShowRT.prototype, "btn2", 2);
  __decorateClass([
    property26({ type: Laya.Sprite })
  ], TextShowRT.prototype, "close1", 2);
  __decorateClass([
    property26({ type: Laya.Sprite })
  ], TextShowRT.prototype, "close2", 2);
  TextShowRT = __decorateClass([
    regClass36("0262d44e-1b4d-49a5-bacc-bf56db4e60ca", "../src/scence/uiDemo/useUI/MouseThroughRT.ts")
  ], TextShowRT);

  // src/scence/uiDemo/useUI/PhysicalCollisionRT.ts
  var { regClass: regClass37, property: property27 } = Laya;
  var PhysicalCollisionRT = class extends Laya.Script {
    onEnable() {
      this.bTop.getComponent(Laya.BoxCollider).width = this.bTop.width;
      this.bBottom.getComponent(Laya.BoxCollider).width = this.bBottom.width;
      this.bRight.getComponent(Laya.BoxCollider).height = this.bRight.height;
      this.bLeft.getComponent(Laya.BoxCollider).height = this.bLeft.height;
    }
  };
  __name(PhysicalCollisionRT, "PhysicalCollisionRT");
  __decorateClass([
    property27({ type: Laya.Image })
  ], PhysicalCollisionRT.prototype, "bTop", 2);
  __decorateClass([
    property27({ type: Laya.Image })
  ], PhysicalCollisionRT.prototype, "bBottom", 2);
  __decorateClass([
    property27({ type: Laya.Image })
  ], PhysicalCollisionRT.prototype, "bRight", 2);
  __decorateClass([
    property27({ type: Laya.Image })
  ], PhysicalCollisionRT.prototype, "bLeft", 2);
  PhysicalCollisionRT = __decorateClass([
    regClass37("8e9e65f1-666d-40bb-95c9-f538963105c9", "../src/scence/uiDemo/useUI/PhysicalCollisionRT.ts")
  ], PhysicalCollisionRT);

  // src/scence/uiDemo/useUI/ProgressRT.generated.ts
  var _ProgressRTBase = class _ProgressRTBase extends Laya.View {
  };
  __name(_ProgressRTBase, "ProgressRTBase");
  var ProgressRTBase = _ProgressRTBase;

  // src/scence/uiDemo/useUI/ProgressRT.ts
  var { regClass: regClass38, property: property28 } = Laya;
  var ProgressRT = class extends ProgressRTBase {
    onEnable() {
      this.testProgress();
    }
    /**
     * 测试加载效果
     */
    testProgress() {
      this.loading2.value = 0.01;
      this.loadText.text = "资源加载中……";
      Laya.timer.loop(100, this, this.changeProgress);
    }
    //这里仅模拟加载演示效果，正常的加载流程，请查看LoadingRuntime类
    changeProgress() {
      this.loading2.value += 0.05;
      if (this.loading2.value == 1) {
        this.loadText.text = "资源加载完成";
        Laya.timer.clear(this, this.changeProgress);
        Laya.timer.once(3e3, this, () => {
          this.testProgress();
        });
      }
    }
  };
  __name(ProgressRT, "ProgressRT");
  ProgressRT = __decorateClass([
    regClass38("f70f7b9f-6ad7-4638-8008-dfefce2cd03f", "../src/scence/uiDemo/useUI/ProgressRT.ts")
  ], ProgressRT);

  // src/scence/uiDemo/useUI/TextShowRT.ts
  var { regClass: regClass39, property: property29 } = Laya;
  var TextShowRT2 = class extends Laya.Script {
    onAwake() {
      this.loadBitmapFont();
    }
    /**
     * 实例化位图字体类，并加载位图字体
     */
    loadBitmapFont() {
      Laya.BitmapFont.loadFont("resources/bitmapfont/gongfang.fnt", new Laya.Handler(this, this.onFontLoaded));
    }
    /**
     * 位图字体加载完成后的回调方法
     * @param bitmapFont 实例后的位图字体对象
     */
    onFontLoaded(bitmapFont) {
      Laya.Text.registerBitmapFont("gongfang", bitmapFont);
      this.btFont.font = "gongfang";
    }
  };
  __name(TextShowRT2, "TextShowRT");
  __decorateClass([
    property29({ type: Laya.Label })
  ], TextShowRT2.prototype, "btFont", 2);
  TextShowRT2 = __decorateClass([
    regClass39("15c52e49-a416-4a70-aea5-7af289a9e254", "../src/scence/uiDemo/useUI/TextShowRT.ts")
  ], TextShowRT2);

  // src/script/mouse/BgImg.ts
  var { regClass: regClass40, property: property30 } = Laya;
  var bgImg = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** x轴最大可拖坐标点 */
      this.maxX = 0;
      /** x轴最小可拖坐标点 */
      this.minX = -90;
      /** y轴最大可拖坐标点 */
      this.maxY = 0;
      /** y轴最小可拖坐标点 */
      this.minY = -580;
      /**每次滚轮的缩放大小 */
      this.scaleSize = 0.1;
      /** 上次的距离值 */
      this.lastDistance = 0;
      /** 开始单指拖拽模式 */
      this.startedSingleTouchDrag = false;
    }
    onEnable() {
      this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
      this.onMouseWheel();
    }
    /** 帧听滚轮事件，并处理滚动 */
    onMouseWheel() {
      this.owner.on(Laya.Event.MOUSE_WHEEL, this, (e) => {
        let point = this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
        if (e.delta > 0) {
          this.owner.scaleX += this.scaleSize;
          this.owner.scaleY += this.scaleSize;
        }
        if (e.delta < 0) {
          this.owner.scaleX -= this.scaleSize;
          this.owner.scaleY -= this.scaleSize;
          this.owner.scaleX < 1 && (this.owner.scaleX = 1);
          this.owner.scaleY < 1 && (this.owner.scaleY = 1);
        }
        let point2 = this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
        let _offsetX = (point2.x - point.x) * this.owner.scaleX;
        let _offsetY = (point2.y - point.y) * this.owner.scaleY;
        _offsetX += this.owner.x;
        _offsetY += this.owner.y;
        this.updateLimit();
        if (_offsetX > this.maxX)
          this.owner.x = this.maxX;
        else if (_offsetX < this.minX)
          this.owner.x = this.minX;
        else
          this.owner.x = _offsetX;
        if (_offsetY > this.maxY)
          this.owner.y = this.maxY;
        else if (_offsetY < this.minY)
          this.owner.y = this.minY;
        else
          this.owner.y = _offsetY;
      });
    }
    onStart() {
      this.updateLimit();
    }
    /** 更新边界限制 */
    updateLimit() {
      let _parent = this.owner.parent;
      this.minX = Math.min(_parent.width - this.owner.width * this.owner.scaleX, 0);
      this.minY = Math.min(_parent.height - this.owner.height * this.owner.scaleY, 0);
    }
    onMouseDown(e) {
      e.stopPropagation();
      if (e.touches && e.touches.length > 1) {
        if (this.startedSingleTouchDrag) {
          this.owner.stopDrag();
          this.startedSingleTouchDrag = false;
        }
        let lastPivot = this.setPivot(e);
        if (!lastPivot.x || !lastPivot.y) {
          console.log("(((((((((((((((((((((((", this.lastPivot, JSON.parse(JSON.stringify(e.touches)));
        } else {
          this.lastDistance = this.getDistance(e);
          this.lastPivot = lastPivot;
          this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
      } else {
        this.owner.startDrag();
        this.startedSingleTouchDrag = true;
      }
    }
    onMouseUp(e) {
      this.owner.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }
    /** 计算两个触摸点坐标之间的距离 */
    getDistance(e) {
      var distance = 0;
      if (e.touches && e.touches.length > 1) {
        let dx = e.touches[0].pos.x - e.touches[1].pos.x;
        let dy = e.touches[0].pos.y - e.touches[1].pos.y;
        distance = Math.sqrt(dx * dx + dy * dy);
      }
      return distance;
    }
    /** 鼠标（或手势）在对象上移动时触发的事件侦听方法 */
    mouseMove(e) {
      let distance = this.getDistance(e);
      this.owner.scaleX += (distance - this.lastDistance) * (this.scaleSize / 10);
      this.owner.scaleY += (distance - this.lastDistance) * (this.scaleSize / 10);
      this.owner.scaleX < 1 && (this.owner.scaleX = 1);
      this.owner.scaleY < 1 && (this.owner.scaleY = 1);
      this.owner.scaleX > 5 && (this.owner.scaleX = 5);
      this.owner.scaleY > 5 && (this.owner.scaleY = 5);
      let nowPivot = this.setPivot(e);
      if (!nowPivot.x || !nowPivot.y) {
        console.log("$$$$$$$$$$$", nowPivot, JSON.parse(JSON.stringify(e.touches)));
      } else {
        this.updateLimit();
        let _offsetX = (nowPivot.x - this.lastPivot.x) * this.owner.scaleX;
        let _offsetY = (nowPivot.y - this.lastPivot.y) * this.owner.scaleY;
        _offsetX += this.owner.x;
        _offsetY += this.owner.y;
        if (_offsetX > this.maxX)
          this.owner.x = this.maxX;
        else if (_offsetX < this.minX)
          this.owner.x = this.minX;
        else
          this.owner.x = _offsetX;
        if (_offsetY > this.maxY)
          this.owner.y = this.maxY;
        else if (_offsetY < this.minY)
          this.owner.y = this.minY;
        else
          this.owner.y = _offsetY;
        this.lastDistance = distance;
      }
    }
    /**
     * 计算并设置多指的中心点坐标
     * @param touches 手势信息数组
     */
    setPivot(e) {
      if (e.touches && e.touches.length >= 2) {
        let Point0 = this.owner.globalToLocal(new Laya.Point(e.touches[0].pos.x, e.touches[0].pos.y));
        let Point1 = this.owner.globalToLocal(new Laya.Point(e.touches[1].pos.x, e.touches[1].pos.y));
        return new Laya.Point((Point0.x + Point1.x) / 2, (Point0.y + Point1.y) / 2);
      }
      return this.lastPivot;
    }
    onUpdate() {
      this.owner.x > this.maxX && (this.owner.x = this.maxX);
      this.owner.x < this.minX && (this.owner.x = this.minX);
      this.owner.y > this.maxY && (this.owner.y = this.maxY);
      this.owner.y < this.minY && (this.owner.y = this.minY);
    }
    /** 添加一个测试点
     * @param point 测试点坐标
     * @param size 测试点大小，圆的半径
     * @param color 测试点的颜色
     */
    addTestPoint(point, color = "#ff0000", size = 2) {
      let spTest = new Laya.Sprite();
      spTest.graphics.drawCircle(0, 0, size, color);
      this.owner.addChild(spTest);
      spTest.pos(point.x, point.y);
    }
  };
  __name(bgImg, "bgImg");
  bgImg = __decorateClass([
    regClass40("73bd7e32-83f6-448c-82ad-d0407e39c883", "../src/script/mouse/BgImg.ts")
  ], bgImg);

  // src/script/mouse/DragAndTips.ts
  var { regClass: regClass41, property: property31 } = Laya;
  var DragAndTips = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.tipsText = "";
      /** 是否已按下 */
      this.isDown = false;
    }
    onEnable() {
      this.tipsText.replace(/(^\s*)|(\s*$)/g, "");
    }
    onMouseDown() {
      this.owner.startDrag();
      this.isDown = true;
    }
    onMouseUp() {
      this.isDown = false;
    }
    onMouseMove() {
      this.isDown && ShapeDetectionRT.i.collisionWith(this.owner);
    }
    onMouseOver() {
      Laya.Mouse.cursor = "move";
      this.tipsText !== "" && Laya.Scene.open("scenes/uiDemo/Msg.ls", false, { "text": this.tipsText });
    }
    onMouseOut() {
      Laya.Mouse.cursor = "auto";
    }
  };
  __name(DragAndTips, "DragAndTips");
  __decorateClass([
    property31({ type: "string" })
  ], DragAndTips.prototype, "tipsText", 2);
  DragAndTips = __decorateClass([
    regClass41("a166bb15-4828-43a0-aab7-2261fc3d58db", "../src/script/mouse/DragAndTips.ts")
  ], DragAndTips);

  // src/script/mouse/Joystick.ts
  var { regClass: regClass42, property: property32 } = Laya;
  var Event6 = Laya.Event;
  var Point3 = Laya.Point;
  var Joystick = class extends Laya.Script {
    constructor() {
      super();
      this.runAniName = "runRight,runRDown1,runRDown2,runRDown3,runDown,runLDown3,runLDown2,runLDown1,runLeft,runLUp1,runLUp2,runLUp3,runUp,runRUp3,runRUp2,runRUp1";
      this.standAniName = "right,Rdown,down,Ldown,left,Lup,up,Rup";
      /** 记录stage上的鼠标点，当频繁使用stage坐标转化时，可以减少实例开销 */
      this.stageMouse = new Point3();
      /** 中心点坐标偏移值 */
      this.axisPivot = new Point3();
      /** 摇杆角度 */
      this.angle = 0;
      /** 摇杆弧度 */
      this.radian = 0;
      /** 是否允许跑动 */
      this.isMoving = false;
      this.isRun = false;
    }
    onEnable() {
      this.joystickBG = this.owner;
      this.joystickAxis = this.owner.getChildByName("joystickAxis");
      this.maxDistance = this.joystickBG.width - this.joystickAxis.width;
      this.axisPivot.x = this.joystickAxis.x;
      this.axisPivot.y = this.joystickAxis.y;
      this.sceneWindow.on(Event6.MOUSE_DOWN, this, this.mouseDown);
      this.sceneWindow.on(Event6.MOUSE_MOVE, this, this.mouseMove);
      this.sceneWindow.on(Event6.MOUSE_UP, this, this.mouseUp);
      this.sceneWindow.on(Event6.MOUSE_OUT, this, this.mouseUp);
      this.roleAniNode = this.roleAni.create();
      this.sceneWindow.addChild(this.roleAniNode);
      this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2);
      this.roleAniNode.x = this.sceneWindow.width / 2;
      this.roleAniNode.y = this.sceneWindow.height / 2;
      this._animator = this.roleAniNode.getComponent(Laya.Animator2D);
    }
    /** 侦听panel 鼠标\手势按下时 */
    mouseDown(e) {
      this.touchId = e.touchId;
      this.isMoving = true;
      this.updateJoystickPoint();
    }
    /** 更新摇杆按下的位置 */
    updateJoystickPoint() {
      this.stageMouse.x = Laya.stage.mouseX;
      this.stageMouse.y = Laya.stage.mouseY;
      let joystickBGMouse = this.joystickBG.globalToLocal(this.stageMouse), mouseX = joystickBGMouse.x - this.joystickAxis.width / 2, mouseY = joystickBGMouse.y - this.joystickAxis.height / 2;
      this.radian = Math.atan2(mouseY - this.axisPivot.y, mouseX - this.axisPivot.x);
      this.lastAngle = this.angle;
      this.angle = Math.round(this.radian * 180 / Math.PI * 10) / 10;
      this.angle < 0 && (this.angle += 360);
      let distance = this.getDistance(this.joystickBG.width / 2, this.joystickBG.height / 2, joystickBGMouse.x, joystickBGMouse.y);
      if (distance > this.maxDistance && this.lastAngle !== this.angle) {
        this.joystickAxis.x = Math.floor(Math.cos(this.radian) * this.maxDistance) + this.axisPivot.x;
        this.joystickAxis.y = Math.floor(Math.sin(this.radian) * this.maxDistance) + this.axisPivot.y;
      } else {
        this.joystickAxis.pos(joystickBGMouse.x - this.joystickAxis.width / 2, joystickBGMouse.y - this.joystickAxis.height / 2);
      }
      this.switchAni("run");
    }
    /** 切换动画
     * @param aniType 动作类型
     */
    switchAni(aniType) {
      if (aniType == "run") {
        let _runAniName = this.getOrientation(this.angle, this.runAniName);
        if (_runAniName !== this.lastRunAniName) {
          this.lastRunAniName = _runAniName;
          this._animator.play(_runAniName);
        }
        this.isRun = true;
      } else {
        this.isRun = false;
        let standS = this.getOrientation(this.angle, this.standAniName);
        this.lastAngle !== this.angle && this._animator.play(standS);
      }
    }
    /** 鼠标抬起时 */
    mouseUp(e) {
      if (e.touchId != this.touchId)
        return;
      this.touchId = null;
      this.isMoving = false;
      this.joystickAxis.pos(this.axisPivot.x, this.axisPivot.y);
      this.switchAni("stand");
    }
    /** 鼠标移动的时候 */
    mouseMove(e) {
      if (e.touchId != this.touchId)
        return;
      this.updateJoystickPoint();
    }
    /** 根据角度得到朝向动画名 
     * @param angle 角度
     * @param aniName 动画名称字符串
     * @return 动画名
    */
    getOrientation(angle, aniName) {
      let aniArr = aniName.split(",");
      const angleConditions = 360 / aniArr.length;
      return aniArr[Math.floor(angle / angleConditions)];
    }
    onUpdate() {
      if (!this.isMoving)
        return;
      this.updateRoleMove();
    }
    /** 更新角色移动相关 */
    updateRoleMove() {
      this.switchAni("run");
      let dx = Math.cos(this.radian) * 2;
      let dy = Math.sin(this.radian) * 2;
      (dx < 0 && this.gameMap.x < 0 || dx > 0 && this.gameMap.x > this.sceneWindow.width - this.gameMap.width) && (this.gameMap.x -= dx);
      (dy < 0 && this.gameMap.y < 0 || dy > 0 && this.gameMap.y > this.sceneWindow.height - this.gameMap.height) && (this.gameMap.y -= dy);
    }
    /** 
    * 获得两个坐标点的直线距离，
    * 依据勾股定理，用目标坐标的分量与原始坐标的分量计算斜边(目标点到鼠标点的直线距离)，用于判断是否超出限制范围
    * @param centerX 原始的中心点坐标X轴位置
    * @param centerY 原始的中心点坐标Y轴位置
    * @param mouseX 鼠标点X轴位置
    * @param mouseY 鼠标点Y轴位置
    */
    getDistance(centerX, centerY, mouseX, mouseY) {
      let dx = centerX - mouseX, dy = centerY - mouseY;
      return Math.sqrt(dx * dx + dy * dy);
    }
  };
  __name(Joystick, "Joystick");
  __decorateClass([
    property32({ type: Laya.Prefab })
  ], Joystick.prototype, "roleAni", 2);
  __decorateClass([
    property32({ type: "string" })
  ], Joystick.prototype, "runAniName", 2);
  __decorateClass([
    property32({ type: "string" })
  ], Joystick.prototype, "standAniName", 2);
  __decorateClass([
    property32({ type: Laya.Sprite })
  ], Joystick.prototype, "gameMap", 2);
  __decorateClass([
    property32({ type: Laya.Panel })
  ], Joystick.prototype, "sceneWindow", 2);
  Joystick = __decorateClass([
    regClass42("3e5e7efc-fa27-48b7-beee-60a7c5e5df47", "../src/script/mouse/Joystick.ts")
  ], Joystick);

  // src/script/tween/Folded.ts
  var { regClass: regClass43, property: property33 } = Laya;
  var Folded = class extends Laya.Script {
    constructor() {
      super();
      /** 工具条是否打开 */
      this.isOpen = true;
    }
    onEnable() {
      this.toolbarBG = this.owner.parent;
      this._owner = this.owner;
      this.menu = this.owner.parent.getChildByName("menu");
    }
    onMouseDown(e) {
      e.stopPropagation();
      if (this.isOpen) {
        Laya.Tween.to(this.toolbarBG, { width: 106 }, 1e3, Laya.Ease.strongOut);
        Laya.Tween.to(this._owner, { x: 52, rotation: 540 }, 1e3, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.isOpen = false;
        }));
        Laya.Tween.to(this.menu, { alpha: 0 }, 300, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.menu.visible = false;
        }));
      } else {
        Laya.Tween.to(this.toolbarBG, { width: 460 }, 1e3, Laya.Ease.strongOut);
        Laya.Tween.to(this._owner, { x: 402, rotation: -360 }, 1e3, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.isOpen = true;
        }));
        Laya.Tween.to(this.menu, { alpha: 1 }, 200, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
          this.menu.visible = true;
        }));
      }
    }
    onDisable() {
    }
  };
  __name(Folded, "Folded");
  Folded = __decorateClass([
    regClass43("84f93029-0bca-4136-9e05-e1291f135410", "../src/script/tween/Folded.ts")
  ], Folded);
})();
//# sourceMappingURL=bundle.js.map
