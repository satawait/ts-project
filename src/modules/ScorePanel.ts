export default class ScorePanel {
    score = 0
    level = 1
    maxLevel: number
    levelUpScore: number
    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor(maxLevel = 10, levelUpScore = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.levelUpScore = levelUpScore
    }
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if (this.score % this.levelUpScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        if (this.level >= this.maxLevel) {
            return
        }
        this.level++
        this.levelEle.innerHTML = this.level + ''
    }
}