export interface ElementsMapEventData {
  toRenderElements: Record<string, HTMLElement[]>
}

export class ElementsMap {
  private static instance: ElementsMap
  private handlers: { (data: ElementsMapEventData): void }[] = []

  public cssVarElementsMap: Record<string, HTMLElement[]> = {}
  private _toRenderElements: Record<string, HTMLElement[]> = {}

  private constructor() {}

  public static getInstance(): ElementsMap {
    if (!ElementsMap.instance) {
      ElementsMap.instance = new ElementsMap()
    }

    return ElementsMap.instance
  }

  public on(handler: (data: ElementsMapEventData) => void): void {
    this.handlers.push(handler)
  }
  public off(handler: (data: ElementsMapEventData) => void): void {
    this.handlers = this.handlers.filter((h) => h !== handler)
  }

  public trigger(data: ElementsMapEventData) {
    this.handlers.slice(0).forEach((h) => h(data))
  }

  public get toRenderElements(): Record<string, HTMLElement[]> {
    return this._toRenderElements
  }

  public set toRenderElements(value: Record<string, HTMLElement[]>) {
    this._toRenderElements = value
    this.trigger({
      toRenderElements: value,
    })
  }
}
