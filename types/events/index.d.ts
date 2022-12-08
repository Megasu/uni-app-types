// https://github.com/wechat-miniprogram/api-typings/blob/5dab2fb5f471f683ad297de32c0e33ede295dcff/types/wx/lib.wx.event.d.ts
import { AnyRecord } from '../Component';

/**
 * @desc 组件的一些属性值集合
 */
interface _EventTarget<Dataset extends AnyRecord = AnyRecord> {
  /**
   * @desc 事件源组件的id
   */
  id?: string;
  /**
   * @desc 当前组件的类型
   */
  tagName?: string;
  /**
   * @desc 事件源组件上由 data- 开头的自定义属性组成的集合
   */
  dataset?: Dataset;
  /**
   * @desc 距离页面顶部的偏移量
   */
  offsetTop: number;
  /**
   * @desc 距离页面左边的偏移量
   */
  offsetLeft: number;
  [key: string]: any;
}

/**
 * @desc 基础事件
 */
interface _BaseEvent<
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> {
  /**
   * @desc 事件类型
   */
  type?: string;
  /**
   * @desc 事件生成时的时间戳
   */
  timeStamp?: number;
  /**
   * @desc 事件冒泡路径上所有由 mark: 开头的自定义属性组成的集合
   */
  mark?: Mark;
  /**
   * @desc 触发事件的源组件的一些属性值集合
   */
  target?: _EventTarget<TargetDataset>;
  /**
   * @desc 事件绑定的当前组件的一些属性值集合
   */
  currentTarget?: Target<CurrentTargetDataset>;
  [key: string]: any;
}

/**
 * @desc 自定义事件
 */
interface _CustomEvent<
  Detail extends AnyRecord = AnyRecord,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends _BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
  /**
   * @desc 额外信息
   */
  detail?: Detail;
  [key: string]: any;
}

/**
 * @desc 当前停留在屏幕中的触摸点信息
 */
interface _TouchDetail {
  /**
   * @desc 标志符
   */
  identifier?: number;
  /**
   * @desc 距离文档左上角的横向距离
   */
  pageX?: number;
  /**
   * @desc 距离文档左上角的纵向距离
   */
  pageY?: number;
  /**
   * @desc 距离页面可显示区域（屏幕除去导航条）左上角的横向距离
   */
  clientX?: number;
  /**
   * @desc 距离页面可显示区域（屏幕除去导航条）左上角的纵向距离
   */
  clientY?: number;
}

/**
 * @desc 当前停留在 canvas 中的触摸点信息
 */
interface _TouchCanvasDetail {
  /**
   * @desc 标志符
   */
  identifier?: number;
  /**
   * @desc 距离 canvas 左上角的横向距离
   */
  x?: number;
  /**
   * @desc 距离 canvas 左上角的纵向距离
   */
  y?: number;
}

/**
 * @desc 触摸事件
 */
interface _BaseTouchEvent<
  Detail extends AnyRecord = AnyRecord,
  T extends _TouchDetail | _TouchCanvasDetail = _TouchDetail,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends _CustomEvent<Detail, Mark, CurrentTargetDataset, TargetDataset> {
  /**
   * @desc 当前停留在屏幕中的触摸点信息的数组
   */
  touches: T[];
  /**
   * @desc 当前变化的触摸点信息的数组
   */
  changedTouches: T[];
}

/**
 * @desc 触摸事件响应
 */
interface _TouchEvent<
  Detail extends AnyRecord = AnyRecord,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends _BaseTouchEvent<Detail, _TouchDetail, Mark, CurrentTargetDataset, TargetDataset> {}

/**
 * @desc canvas 触摸事件响应
 */
interface _TouchCanvasEvent<
  Mark extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = AnyRecord,
> extends _BaseTouchEvent<never, _TouchCanvasDetail, Mark, never, TargetDataset> {
  currentTarget: never;
}

export {
  _EventTarget as EventTarget,
  _BaseEvent as BaseEvent,
  _CustomEvent as CustomEvent,
  _TouchDetail as TouchDetail,
  _TouchCanvasDetail as TouchCanvasDetail,
  _BaseTouchEvent as BaseTouchEvent,
  _TouchEvent as TouchEvent,
  _TouchCanvasEvent as TouchCanvasEvent,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 组件的一些属性值集合
     */
    export interface EventTarget extends _EventTarget {}
    /**
     * @desc 基础事件
     */
    export interface BaseEvent extends _BaseEvent {}
    /**
     * @desc 自定义事件
     */
    export interface CustomEvent extends _CustomEvent {}
    /**
     * @desc 当前停留在屏幕中的触摸点信息
     */
    export interface TouchDetail extends _TouchDetail {}
    /**
     * @desc 当前停留在 canvas 中的触摸点信息
     */
    export interface TouchCanvasDetail extends _TouchCanvasDetail {}
    /**
     * @desc 触摸事件
     */
    export interface BaseTouchEvent extends _BaseTouchEvent {}
    /**
     * @desc 触摸事件响应
     */
    export interface TouchEvent extends _TouchEvent {}
    /**
     * @desc canvas 触摸事件响应
     */
    export interface TouchCanvasEvent extends _TouchCanvasEvent {}
  }
}
