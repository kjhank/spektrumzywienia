import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload, faFile, faFileExcel, faFilePdf, faFilePowerpoint, faFileWord,
} from '@fortawesome/pro-light-svg-icons';

import { Container } from '@components';

import {
  FileDescription, FileLink, FileName, FilesList, SingleFile,
} from './Files.styled';

const fileTypes = {
  doc: faFileWord,
  docx: faFileWord,
  pdf: faFilePdf,
  ppt: faFilePowerpoint,
  pptx: faFilePowerpoint,
  xls: faFileExcel,
  xlsx: faFileExcel,
};

export const Files = ({ files }) => (
  <Container>
    <FilesList>
      {files.map(singleFile => (
        <SingleFile key={singleFile.name}>
          <FileName>
            {singleFile.name}
            <FontAwesomeIcon icon={fileTypes[singleFile.file.subtype] || faFile} />
          </FileName>
          {singleFile.description && <FileDescription>{singleFile.description}</FileDescription>}
          <FileLink href={singleFile.file.url}>
            <FontAwesomeIcon icon={faDownload} />
            <span>Pobierz</span>
          </FileLink>
        </SingleFile>
      ))}
    </FilesList>
  </Container>
);

Files.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
