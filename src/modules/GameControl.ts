import Food from '@/modules/Food'
import ScorePanel from '@/modules/ScorePanel'
import Snake from '@/modules/Snake'

export default class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ''
    isLive: boolean = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    init() {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            console.log(event.key)
            this.direction = event.key
        })
        this.moveSnake()
    }
    moveSnake() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10    
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10      
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10    
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10    
                break;
            default:
                break;
        }
        if (this.checkEat(X, Y)) {
            this.food.changePosition()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message)
              }
            this.isLive = false
        }
        if (!this.isLive) {
            return
        }
        setTimeout(() => {
            this.moveSnake()
        }, 300 - (this.scorePanel.level - 1) * 30)
    }
    checkEat(X: number, Y: number) {
        return X === this.food.X && Y === this.food.Y
    }
}