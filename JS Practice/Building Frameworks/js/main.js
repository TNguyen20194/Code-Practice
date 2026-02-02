import Tiny from "../Tiny/tiny.js";

Tiny({
    selector: "main",
    template() {
        return `
        <div class="component parent-component flow">
        <h1>Parent Counter</h1>
        <p>Count: 0</p>
        <button tiny-listener="[click, increaseCount]">Increase count by 1</button>

        <div class="half">
          <div class="component child-component flow">
            <h2>Child Counter</h2>
            <p>Count: 0</p>
            <button tiny-listener="[click, increaseChildCount]">Increase count by 1</button>
            <button tiny-listener="[click, increaseCount]">Increase parent count by 1</button>
          </div>
          <div class="component total-component flow text">
            <h2>Total Count</h2>
            <ul>
              <li>Parent Count: 0</li>
              <li>Child Count: 0</li>
              <li>Total Count: 0</li>
            </ul>
          </div>
        </div>
      </div>
        `
    },
    increaseCount(event) {
        console.log("Increasing count")
    },

    increaseChildCount(event) {
        console.log("Increasing child count")
    }
})