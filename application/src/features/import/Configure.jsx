
import { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, InputGroup, Form, Badge } from 'react-bootstrap';

import onlyNumbers from '../../lib/onlyNumbers';
import AssetPreview from './AssetPreview';
import assetConfiguration from './assetConfiguration';

const Configure = ({
    index,
    importer: {
        slicer,
        getTags,
        getAssetConfig,
        updateAssetConfig,
        dimensions,
        spriteUrl
    }
}) => {

    const [config, setConfig] = useState();

    useEffect(() => {

        let assetConfig = getAssetConfig(index);

        if (assetConfig == null) {

            const slice = slicer.getSlices(dimensions)[index];
            
            const importTags = getTags();
            const slicerTags = slicer.tags;
            const sliceTags = slice.tags;

            const tags = [
                ...importTags,
                ...slicerTags,
                ...sliceTags
            ].filter(tag => tag.trim());

            assetConfig = assetConfiguration(
                dimensions.x,
                dimensions.y,
                slice,
                tags.join(', ')
            );
        }

        setConfig(assetConfig);
    }, [
        index,
        slicer,
        getAssetConfig,
        dimensions,
        setConfig
    ]);

    const setId = useCallback(e => {

        updateAssetConfig(
            index,
            {
                ...config,
                id: e.target.value
            }
        );
    }, [
        index,
        config,
        updateAssetConfig
    ]);

    const setTagString = useCallback(e => {
        updateAssetConfig(
            index,
            {
                ...config,
                tagString: e.target.value
            }
        );
    }, [
        index,
        config,
        updateAssetConfig
    ]);

    const setFrames = useCallback(e => {
        updateAssetConfig(
            index,
            {
                ...config,
                frames: e.target.value
            }
        );
    }, [
        index,
        config,
        updateAssetConfig
    ]);

    return (
        <Container className="mb-2">
            <Row className="g-2">

                <Col xs={12} className="text-end">
                    Asset <span className="text-primary">{index + 1}</span>{` of ${slicer.getSlices(dimensions).length}`}
                </Col>

                <Col xs={12}>
                    <InputGroup>
                        <InputGroup.Text>Id</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="missing_id"
                            onChange={setId}
                            value={config?.id}
                            isInvalid={!config?.id.trim()}
                        />
                    </InputGroup>
                </Col>

                <Col xs={9}>
                    <InputGroup>
                        <InputGroup.Text>Tags</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="red, vector"
                            onChange={setTagString}
                            value={config?.tagString}
                        />
                    </InputGroup>
                </Col>

                <Col xs={3}>
                    <InputGroup>
                        <InputGroup.Text>Frames</InputGroup.Text>
                        <Form.Control
                            type="number"
                            onKeyDown={e => onlyNumbers(e)}
                            disabled={!slicer.isAnimated}
                            onChange={setFrames}
                            value={config?.frames}
                        />
                    </InputGroup>
                </Col>

                <Col xs={12}>
                    {
                        config?.getTags(config).map((tag, index) => (
                            <Badge key={index} bg="info" className="me-2">{tag}</Badge>
                        ))
                    }
                </Col>

                <Col xs={12}>
                    <AssetPreview
                        spriteUrl={spriteUrl}
                        dimensions={config?.dimensions}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Configure;