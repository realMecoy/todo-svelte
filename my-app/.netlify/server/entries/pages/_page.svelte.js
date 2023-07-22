import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toDoList = [];
  const d = (/* @__PURE__ */ new Date()).toDateString();
  console.log(d);
  let textInput = "";
  return `${$$result.head += `<!-- HEAD_svelte-11hm7t1_START --><link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"><!-- HEAD_svelte-11hm7t1_END -->`, ""} <div style="margin: 0 auto; padding: 1em; max-width: 700px;"><h2 style="text-align: center;" data-svelte-h="svelte-1q8zg0j">Todo List</h2> <p data-svelte-h="svelte-1rj56ya">Enter Todo here:</p> <div style="display: flex;"><input type="text"${add_attribute("value", textInput, 0)}> <button style="width: 200px;" data-svelte-h="svelte-1l95s2p">Add</button></div></div> ${each(toDoList, (toDo, i) => {
    return `<div style="display: flex; align-items:baseline; width: 700px; margin: 0 auto;">${toDo.editing ? `<input type="text"${add_attribute("value", toDo.content, 0)}>` : `<input type="checkbox"${add_attribute("checked", toDo.checked, 1)}> <h4 style="flex-grow: 1">${escape(toDo.content)}</h4>`} <div style="display: flex, justify-content: space-between">${toDo.editing ? `<button data-svelte-h="svelte-gq96yi">Save</button>` : `<button data-svelte-h="svelte-8l0gx2">Edit</button>`} <button data-svelte-h="svelte-1yu4oa8">Delete</button></div> <p>${escape(d)}</p> </div>`;
  })}`;
});
export {
  Page as default
};
