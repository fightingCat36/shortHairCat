declare interface DrawingBoardFactory {
    create(config: createConfig): DrawingBoard

    destroy(id: string): void
}