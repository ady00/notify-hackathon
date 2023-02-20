// import { styled } from '@styled';

import AllNotesContainer from '@components/notesContainer';
import NoteBox from '@components/noteBox';

import { Note, NotePosition, NoteSize } from '@lib/store/notes';

import { styled } from '@styled';

import Circle from '@components/annotations/circle';
import useLandingPageNotes from '@state/landingPageNotes';
import { LandingPageState } from '@lib/store/landingPage';

const Container = styled('div', {
  height: 'fit-content',

  marginBottom: '40rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '4rem',

  '@tablet': {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
});

const StepsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10rem',

  '@tablet': {
    width: '70%',
    gap: '5rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const CircleBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '2rem',

  width: '16rem',
});

const CircleText = styled('span', {
  fontFamily: '$indie',
  fontSize: '2.2rem',
  color: '$grey-500',
});

const Description = styled('p', {
  fontFamily: '$indie',
  fontSize: '2rem',
  color: '$grey-600',
  lineHeight: '3.6rem',
});

const HomeNotes: React.FC = () => {
  const { notes, addNote, updateNote, removeNote } = useLandingPageNotes(
    (state: LandingPageState) => state
  );

  const handleOnDragStop = (
    id: string,
    data: { position: NotePosition; size: NoteSize; text: string }
  ) => {
    updateNote(id, data);
  };

  const handleOnResizeStop = (
    id: string,
    data: { position: NotePosition; size: NoteSize; text: string }
  ) => {
    updateNote(id, data);
  };

  const handleOnTextChange = (
    id: string,
    data: { position: NotePosition; size: NoteSize; text: string }
  ) => {
    updateNote(id, data);
  };

  const handleOnRemoveClick = (id: string) => {
    removeNote(id);
  };

  const handleOnSelectionComplete = ({ position, size }) => {
    if (size.width >= 100 && size.height >= 100) {
      addNote({
        position,
        size,
        text: '',
      });
    }
  };

  const onDoubleClick = ({ pos }) => {
    console.log(pos);

    addNote({
      position: pos,
      size: {
        width: 200,
        height: 300,
      },
      text: '',
    });
  };
  return (
    <div></div>
  );
};

export default HomeNotes;
