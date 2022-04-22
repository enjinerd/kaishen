import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Button } from '../../ui';

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpenState?: boolean;
};

const PlaylistForm: React.FC<Props> = ({
  handleSubmit,
  handleChange,
  isOpenState = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(isOpenState);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Create Playlist
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl">
                <form
                  className="flex flex-col items-center justify-center gap-3 px-6 "
                  data-testid="playlist-form"
                  onSubmit={handleSubmit}>
                  <label
                    htmlFor="playlist-name"
                    className="block text-gray-200 text-lg font-medium mb-2">
                    Playlist Name
                  </label>
                  <input
                    type="text"
                    id="playlist-name"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="playlist-desc"
                    className="block text-gray-200 text-lg font-medium mb-2">
                    Playlist Description
                  </label>
                  <input
                    type="text"
                    id="playlist-desc"
                    placeholder="Playlist Description"
                    onChange={handleChange}
                    name="description"
                  />
                  <Button type="submit" onClick={() => setIsOpen(false)}>
                    Create Playlist
                  </Button>
                </form>
                <div className="mt-4 flex flex-row space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PlaylistForm;
