import { TABLE_BODY } from "../services/domService.js";
import { removeItemFromLocalStorage } from "../services/localStorageService.js";

export const renderTable = (pictures) => {
  TABLE_BODY.innerHTML = "";
  pictures.forEach((pic, index) => {
    const { _id, url, alt, credits } = pic;
    TABLE_BODY.innerHTML += `
        <tr id="${_id}">
            <td>${index + 1}</td>
            <td><img style="max-width: 50px;" src="${url}" alt="${alt}" /></td>
            <td>${url}</td>
            <td>${alt}</td>
            <td>${credits}</td>
            <td><i class="bi bi-pencil-square cursor" id="edit${_id}"></i></td>
            <td><i class="bi bi-trash3-fill cursor" id="delete${_id}"></i></td>
        </tr>
        `;

    // const TRASH_TABLE_PIC = document.querySelector(`#delete${_id}`);
    // TRASH_TABLE_PIC.addEventListener("click", () => {
    //   removeItemFromLocalStorage(`pic${_id}`);
    // });
  });
};
