/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from "react";
import { Meta } from "@storybook/react";
import { Button } from "@chakra-ui/react";
import { CgColorPicker, CgEditShadows, CgSpaceBetween } from "react-icons/cg";
import { ImFontSize } from "react-icons/im";
import { BiText } from "react-icons/bi";
import { MdRoundedCorner } from "react-icons/md";
import ColorModeToggle from "../src/components/base/ColorModeToggle";
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorRootPanel,
  ThemeEditorDrawer,
  ThemeEditor,
} from "../src";

export default {
  title: "HyperThemeEditor/chakra-ui-core/ThemeEditor",
  component: ThemeEditor,
  argTypes: {},
  disclosureProps: {},
} as Meta<typeof ThemeEditor>;

export const FreeVersionWithRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <Button colorScheme="blue">Button</Button>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        {/* <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          <ThemeEditorColors />
        </ThemeEditorRootPanel>
        <ThemeEditorRootPanel icon={ImFontSize} title="Font Sizes">
          <ThemeEditorFontSizes />
        </ThemeEditorRootPanel> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
);

export const FreeVersionWithoutRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <Button colorScheme="blue">Button</Button>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        {/* <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" /> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
);

export const ProVersion = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <Button colorScheme="blue" letterSpacing="wider">
        Button
      </Button>
      <ThemeEditorButton />
      <ThemeEditorButton label="Try it" size="sm" />
      <ThemeEditorDrawer hideUpgradeToPro hideCredits>
        {/* <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          <ThemeEditorColors />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={BiText} title="Typography">
          <ThemeEditorTypography />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={CgEditShadows} title="Shadows">
          <ThemeEditorShadows />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={MdRoundedCorner} title="Radii">
          <ThemeEditorRadii />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={CgSpaceBetween} title="Space">
          <ThemeEditorSpacing />
        </ThemeEditorRootPanel> */}
      </ThemeEditorDrawer>
      <ColorModeToggle />
    </ThemeEditor>
  </ThemeEditorProvider>
);

export const ControlledThemeEditor = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const onClose = () => setIsOpen(false);

  return (
    <ThemeEditorProvider>
      <ThemeEditor isOpen={isOpen} onClose={onClose} {...args}>
        <Button colorScheme="blue" letterSpacing="wider" onClick={onClick}>
          Click Me!
        </Button>
        <ThemeEditorDrawer />
      </ThemeEditor>
    </ThemeEditorProvider>
  );
};
