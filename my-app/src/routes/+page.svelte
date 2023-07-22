<script>
  let toDoList = [];

  const d = new Date().toDateString();
  console.log(d);

  let textInput = "";

  function addToDo() {
    if (textInput !== "") {
      toDoList = [
        ...toDoList,
        { content: textInput, editing: false, checked: false },
      ];
    } else {
      console.log("Input is empty");
    }
    textInput = "";
  }

  function setEditing(i, isEditing) {
    toDoList[i].editing = isEditing; // True or False
  }

  function deleteTodo(i) {
    if (toDoList[i].checked) {
      toDoList.splice(i, 1);
      toDoList = toDoList;
    }
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
  />
</svelte:head>

<div style="margin: 0 auto; padding: 1em; max-width: 700px;">
  <h2 style="text-align: center;">Todo List</h2>
  <p>Enter Todo here:</p>
  <div style="display: flex;">
    <input type="text" bind:value={textInput} />
    <button style="width: 200px;" on:click={addToDo}>Add</button>
  </div>
</div>

{#each toDoList as toDo, i}
  <div
    style="display: flex; align-items:baseline; width: 700px; margin: 0 auto;"
  >
    {#if toDo.editing}
      <input type="text" bind:value={toDo.content} />
    {:else}
      <input type="checkbox" bind:checked={toDo.checked} />
      <h4 style="flex-grow: 1">{toDo.content}</h4>
    {/if}
    <div style="display: flex, justify-content: space-between">
      {#if toDo.editing}
        <button on:click={() => setEditing(i, false)}>Save</button>
      {:else}
        <button on:click={() => setEditing(i, true)}>Edit</button>
      {/if}
      <button on:click={() => deleteTodo(i)}>Delete</button>
    </div>
    <p>{d}</p>
  </div>
{/each}
