import React, { useContext } from "react";
import styles from './NoteGroup.module.css';
import { NotesContext } from "../../Context/NotesContext";

export default function NoteGroup({ openPopup }) {
    const { notesData, selectedGroup, setSelectedGroup } = useContext(NotesContext);

    const handleGroupClick = (groupName) => {
        setSelectedGroup(groupName);
    };

    return (
       <div className={styles.notes_group_body}>
  <h1 className={styles.group_heading}>Pocket Notes</h1>

  <div className={styles.notes_group_sub_body}>
    <button className={styles.create_group_button} onClick={openPopup}>
      + Create New Group
    </button>

    {/* ✅ Scrollable container */}
    <div className={styles.group_list_container}>
      {Object.keys(notesData).length === 0 ? (
        <p>No groups available</p>
      ) : (
        Object.keys(notesData).map((group, index) => (
          <div
            key={index}
            className={styles.group_name_grid}
            style={{
              backgroundColor:
                selectedGroup === group ? "rgba(247, 236, 220, 1)" : "transparent",
            }}
            onClick={() => handleGroupClick(group)}
          >
            <div
              className={styles.group_name_dp}
              style={{ backgroundColor: notesData[group].color }}
            >
              {group.toUpperCase().substring(0, 2)}
            </div>
            <div className={styles.group_item} title={group}>
              {group}
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

    );
}
