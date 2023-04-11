const app: HTMLElement | null = document.querySelector<HTMLElement>("#app")
const calcScreen: HTMLElement | null  = document.querySelector<HTMLElement>("#calculator-screen p")
const numpad: HTMLElement | null  = document.querySelector<HTMLElement>("#calculator-pad")
// const numpadInput: NodeListOf<Element> = document.querySelectorAll<Element>("#calculator-pad button")


let equation: string[] = []

numpad!.addEventListener<"click">("click", (e: MouseEvent) => {
  let btn:HTMLButtonElement = e.target as HTMLButtonElement

  if (btn.dataset.pad !== "+" && btn.dataset.pad !== "-" && btn.dataset.pad !== "/" && btn.dataset.pad !== "*" && btn.dataset.pad !== "=" && btn.dataset.pad !== "C") {
    console.log("1")
    equation.push(btn.dataset.pad!)
    calcScreen!.textContent = updateScreen(equation)
  } else if (btn.dataset.pad === "+" || btn.dataset.pad === "-" || btn.dataset.pad === "/" || btn.dataset.pad === "*") {
    console.log("2")
    equation.push(btn.dataset.pad)
    calcScreen!.textContent = updateScreen(equation)
  } else if (btn.dataset.pad === "=") {
    console.log("3")
    calculate(equation)
  } else if (btn.dataset.pad === "C") {
    calcScreen!.textContent = "0"
    equation = []
  }
})

function updateScreen(userEquation: string[] | number): any {
  let combine: string|number;
  if (Array.isArray(userEquation)) {
    combine = userEquation.join("")
  } else {
    combine = userEquation
  }
  return combine
}

function calculate(userEquation: string[]): void {
  console.log("4")
  let combine:string = userEquation.join("")
  console.log(combine)
  let evaluate:number = eval(combine)
  console.log(evaluate)
  calcScreen!.textContent = updateScreen(evaluate)
}
