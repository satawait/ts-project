import '@/assets/styles/index.less'
class Food {
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')!
    }
    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }

    changePosition() {
        this.element.style.left = `${Math.round(Math.random() * 29) * 10}px`
        this.element.style.top = `${Math.round(Math.random() * 29) * 10}px`
    }
}

class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor() {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
    }
    levelUp() {
        this.level++
        this.levelEle.innerHTML = this.level + ''
    }
}